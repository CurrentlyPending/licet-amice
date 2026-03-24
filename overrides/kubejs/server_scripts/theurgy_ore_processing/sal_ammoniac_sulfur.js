ServerEvents.recipes(event => {
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:poor_ore/zircon"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:poor_ore/zircon"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 4,
    "item": "theurgy:alchemical_sulfur_sal_ammoniac",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/sal_ammoniac"
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
        "tag": "forge:normal_ore/zircon"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:normal_ore/zircon"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 6,
    "item": "theurgy:alchemical_sulfur_sal_ammoniac",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/sal_ammoniac"
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
        "tag": "forge:rich_ore/zircon"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:rich_ore/zircon"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 8,
    "item": "theurgy:alchemical_sulfur_sal_ammoniac",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/sal_ammoniac"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
})
