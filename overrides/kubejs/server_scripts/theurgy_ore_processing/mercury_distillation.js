ServerEvents.recipes(event => {
event.custom({
  "type": "theurgy:distillation",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:poor_ore"
      }
    }
  ],
  "distillation_time": 100,
  "ingredient": {
    "tag": "forge:poor_ore"
  },
  "ingredient_count": 1,
  "result": {
    "count": 1,
    "item": "theurgy:mercury_shard"
  }
})
event.custom({
  "type": "theurgy:distillation",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:normal_ore"
      }
    }
  ],
  "distillation_time": 100,
  "ingredient": {
    "tag": "forge:normal_ore"
  },
  "ingredient_count": 1,
  "result": {
    "count": 3,
    "item": "theurgy:mercury_shard"
  }
})
event.custom({
  "type": "theurgy:distillation",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:rich_ore"
      }
    }
  ],
  "distillation_time": 100,
  "ingredient": {
    "tag": "forge:rich_ore"
  },
  "ingredient_count": 1,
  "result": {
    "count": 5,
    "item": "theurgy:mercury_shard"
  }
})
event.custom({
  "type": "theurgy:distillation",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:crushed_ore"
      }
    }
  ],
  "distillation_time": 100,
  "ingredient": {
    "tag": "forge:crushed_ore"
  },
  "ingredient_count": 1,
  "result": {
    "count": 2,
    "item": "theurgy:mercury_shard"
  }
})
})
