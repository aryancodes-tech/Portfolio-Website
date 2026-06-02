---
title: "Docker Compose for backend stacks"
description: "Spin up Postgres + Redis + your API locally with sane defaults and deterministic networking."
date: "2026-06-03"
tags: [docker, compose, postgres, redis]
---

## Why Compose matters

Your local setup should match production topology:

- separate services
- explicit ports
- repeatable volumes

Compose gives you **one command boot** for multi-service workflows.

## A minimal stack

The two big tips:

1. Use **healthchecks** (avoid flaky “depends_on means ready” assumptions)
2. Keep env vars explicit and commit safe defaults (**no secrets**)

```yaml
services:
  postgres:
    image: postgres:16
    ports: ["5432:5432"]
```

