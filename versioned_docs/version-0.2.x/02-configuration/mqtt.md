---
sidebar_position: 1
---

# MQTT Client

![MQTT](/img/mqtt.png)

Mqtt client component connects to your mqtt broker.

This broker for most cases should be the same broker as Home Assistant broker, so you can't directly see new device with HA MQTT discovery option.

## Example config

```yaml title="Example config"
mqtt:
  host: localhost
  username: mqtt
  password: mqtt
  topic_prefix: boneio1
  ha_discovery:
    enabled: yes
```

## Configuration variables:

- **host** (**Required**, string) - Mqtt broker hostname or IP address
- **username** (Optional, string) - Username to connect ot mqtt broker
- **password** (Optional, string) - Password to mqtt broker
- **port** (_Optional_, integer, default: 1883) - Port to connect to mqtt broker
- **topic_prefix** (_Optional_, string, default: boneIO) - Prefix topic for boneIO to use. It's means that this name will be used in HomeAssistant.
- **ha_discovery**:
  - **enabled** (_Optional_, boolean, default: True) - Enable HA discovery
  - **topic_prefix** (_Optional_, string, default: homeassistant) - Topic prefix which HomeAssistant uses for MQTT discovery.
