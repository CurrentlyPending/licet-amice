ServerEvents.recipes(event => {
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
            "tag": "forge:crushed_ore/uraninite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/uraninite"
  },
  "output": {
    "amount": 120,
    "tag": "forge:molten_uranium"
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
            "tag": "forge:crushed_ore/thorite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/thorite"
  },
  "output": {
    "amount": 90,
    "tag": "forge:molten_uranium"
  }
})
})