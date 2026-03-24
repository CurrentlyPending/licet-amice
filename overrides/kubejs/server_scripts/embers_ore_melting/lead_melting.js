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
            "tag": "forge:crushed_ore/lead"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/lead"
  },
  "output": {
    "amount": 150,
    "tag": "forge:molten_lead"
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
            "tag": "forge:crushed_ore/vanadinite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/vanadinite"
  },
  "output": {
    "amount": 90,
    "tag": "forge:molten_lead"
  }
})
event.custom({	
"type": "embers:melting",
  "bonus": {
    "amount": 60,
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
            "tag": "forge:crushed_ore/galena"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/galena"
  },
  "output": {
    "amount": 90,
    "tag": "forge:molten_lead"
  }
})
})