---
icon: bullseye-arrow
---

# Installation

{% hint style="danger" %}
**psps is in ALPHA.** If you would like to help test the bleeding edge, please use the image `enymawse/psps:rolling`.
{% endhint %}

{% hint style="warning" %}
After running psps for the first time, configure it by visiting the web UI at `http://[address]:6767` and completing the setup steps.
{% endhint %}



### Docker

{% tabs %}
{% tab title="Docker CLI" %}
#### Installation:

```shell
docker run -p 6767:6767 psps
```
{% endtab %}

{% tab title="Docker Compose" %}
#### Installation:

```yaml
---
version: '3'

services:
    overseerr:
        image: enymawse/psps:rolling
        container_name: psps
        ports:
            - 6767:6767
        restart: unless-stopped

```
{% endtab %}
{% endtabs %}



