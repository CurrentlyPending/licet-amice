ServerEvents.recipes(event => {
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:poor_platinum_ores"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:poor_platinum_ores"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 1,
    "item": "theurgy:alchemical_sulfur_platinum",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/platinum"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:normal_platinum_ores"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:normal_platinum_ores"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 2,
    "item": "theurgy:alchemical_sulfur_platinum",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/platinum"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:rich_platinum_ores"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:rich_platinum_ores"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 3,
    "item": "theurgy:alchemical_sulfur_platinum",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/platinum"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:poor_ore/cobaltite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:poor_ore/cobaltite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 1,
    "item": "theurgy:alchemical_sulfur_platinum",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/platinum"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:normal_ore/cobaltite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:normal_ore/cobaltite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 2,
    "item": "theurgy:alchemical_sulfur_platinum",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/platinum"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:rich_ore/cobaltite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:rich_ore/cobaltite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 3,
    "item": "theurgy:alchemical_sulfur_platinum",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/platinum"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
})
