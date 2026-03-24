ServerEvents.recipes(event => {
event.custom({
"type": "theurgy:liquefaction",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:tag_empty",
        "tag": "forge:poor_ore/fluorite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:poor_ore/fluorite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 3,
    "item": "theurgy:alchemical_sulfur_fluorite",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/fluorite"
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
        "tag": "forge:normal_ore/fluorite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:normal_ore/fluorite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 4,
    "item": "theurgy:alchemical_sulfur_fluorite",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/fluorite"
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
        "tag": "forge:rich_ore/fluorite"
      }
    }
  ],
  "ingredient": {
    "tag": "forge:rich_ore/fluorite"
  },
  "liquefaction_time": 100,
  "result": {
    "count": 5,
    "item": "theurgy:alchemical_sulfur_fluorite",
    "nbt": {
      "theurgy:sulfur.source.id": "#forge:ores/fluorite"
    }
  },
  "solvent": {
    "fluid": "theurgy:sal_ammoniac"
  },
  "solvent_amount": 10
})
})
