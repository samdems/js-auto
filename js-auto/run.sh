#!/usr/bin/with-contenv bashio
set +u

export REFRESH_TOKEN=$(bashio::config 'refresh_token')
export NODE_OPTIONS=--max_old_space_size=8192


npm run start