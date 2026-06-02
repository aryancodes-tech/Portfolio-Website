---
title: "Engineering notes: what I optimize for"
description: "A short memo on building reliable systems: correctness, observability, and sustainable speed."
date: "2026-06-01"
tags: [engineering, career, systems]
---

## Correctness over cleverness

When in doubt, make the invariant explicit and test it. If a system is hard to reason about, it will fail in production.

## Observability is a feature

I like systems where the “why” is discoverable: structured logs, high-signal metrics, and traces that survive refactors.

## Sustainable speed

Fast teams ship small, reversible changes. The compounding effect beats heroic crunch cycles every time.

