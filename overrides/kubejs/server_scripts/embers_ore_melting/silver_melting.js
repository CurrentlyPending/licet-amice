ServerEvents.recipes(event => {
event.custom({	
"type": "embers:melting",
  "bonus": {
    "amount": 10,
    "tag": "forge:molten_lead"
  },
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:crushed_ore/silver"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/silver"
  },
  "output": {
    "amount": 150,
    "tag": "forge:molten_silver"
  }
})
event.custom({	
"type": "embers:melting",
  "bonus": {
    "amount": 30,
    "tag": "forge:molten_lead"
  },
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:crushed_ore/acanthite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/acanthite"
  },
  "output": {
    "amount": 120,
    "tag": "forge:molten_silver"
  }
})
})