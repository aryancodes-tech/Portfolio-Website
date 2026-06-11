---
title: "Docker: Getting started (the mental model)"
description: "Images vs containers, layers, and the 3 commands you’ll actually use daily."
date: "2026-06-02"
tags: [docker, basics]
---

## What you should visualize

An **image** is an immutable filesystem snapshot + metadata.  
A **container** is a running instance with a thin writable layer on top.

The biggest unlock is separating:

- **Build-time**: `Dockerfile`, layers, caching
- **Run-time**: `docker run`, networking, volumes

## The daily workflow

Build:

```bash
docker build -t myapp:dev .
```

Run:

```bash
docker run --rm -p 8080:8080 myapp:dev
```

Debug:

```bash
docker logs <container>
docker exec -it <container> sh
```

