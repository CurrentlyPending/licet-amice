ServerEvents.recipes(event => {
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:poor_ore/millerite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:poor_ore/millerite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 1,
    "item": "theurgy:alchemical_sulfur_nickel",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/nickel"
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
        "tag": "forge:normal_ore/millerite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:normal_ore/millerite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 2,
    "item": "theurgy:alchemical_sulfur_nickel",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/nickel"
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
        "tag": "forge:rich_ore/millerite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:rich_ore/millerite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 3,
    "item": "theurgy:alchemical_sulfur_nickel",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/nickel"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
})
