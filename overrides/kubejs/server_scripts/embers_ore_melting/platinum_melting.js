ServerEvents.recipes(event => {
event.custom({	
"type": "embers:melting",
  "bonus": {
    "amount": 10,
    "tag": "forge:molten_silver"
  },
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:crushed_ore/platinum"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/platinum"
  },
  "output": {
    "amount": 150,
    "tag": "forge:molten_platinum"
  }
})
event.custom({	
"type": "embers:melting",
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:crushed_ore/cobaltite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/cobaltite"
  },
  "output": {
    "amount": 90,
    "tag": "forge:molten_platinum"
  }
})
event.custom({	
"type": "embers:melting",
  "bonus": {
    "amount": 10,
    "tag": "forge:molten_silver"
  },
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:crushed_ore/unobtania"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/unobtania"
  },
  "output": {
    "amount": 90,
    "tag": "forge:molten_platinum"
  }
})
event.custom({	
"type": "embers:melting",
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:crushed_ore/molybdenite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/molybdenite"
  },
  "output": {
    "amount": 60,
    "tag": "forge:molten_platinum"
  }
})
})