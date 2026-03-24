ServerEvents.recipes(event => {
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:poor_ore/uraninite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:poor_ore/uraninite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 1,
    "item": "theurgy:alchemical_sulfur_uranium",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ingots/uranium"
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
        "tag": "forge:normal_ore/uraninite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:normal_ore/uraninite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 2,
    "item": "theurgy:alchemical_sulfur_uranium",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ingots/uranium"
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
        "tag": "forge:rich_ore/uraninite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:rich_ore/uraninite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 3,
    "item": "theurgy:alchemical_sulfur_uranium",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ingots/uranium"
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
        "tag": "forge:poor_ore/thorite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:poor_ore/thorite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 1,
    "item": "theurgy:alchemical_sulfur_uranium",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ingots/uranium"
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
        "tag": "forge:normal_ore/thorite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:normal_ore/thorite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 2,
    "item": "theurgy:alchemical_sulfur_uranium",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ingots/uranium"
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
        "tag": "forge:rich_ore/thorite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:rich_ore/thorite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 3,
    "item": "theurgy:alchemical_sulfur_uranium",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ingots/uranium"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
})
