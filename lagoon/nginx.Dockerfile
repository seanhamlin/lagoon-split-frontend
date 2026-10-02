FROM uselagoon/nginx:latest

# Real IP through Fastly.
RUN set -o pipefail \
  && wget -qO- https://api.fastly.com/public-ip-list \
    | grep -oE '[0-9a-f.:]+/[0-9]+' \
    | sed 's|.*|set_real_ip_from &;|' \
    > /etc/nginx/conf.d/00-fastly-realip.conf \
  && test -s /etc/nginx/conf.d/00-fastly-realip.conf

# Redirects.
COPY ./lagoon/redirects-map.conf /etc/nginx/redirects-map.conf

# Custom configuration.
COPY ./lagoon/app.conf /etc/nginx/conf.d/app.conf
