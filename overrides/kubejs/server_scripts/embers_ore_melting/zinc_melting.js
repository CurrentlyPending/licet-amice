ServerEvents.recipes(event => {
event.custom({	
"type": "embers:melting",
  "bonus": {
    "amount": 30,
    "tag": "forge:molten_copper"
  },
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:crushed_ore/smithsonite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/smithsonite"
  },
  "output": {
    "amount": 120,
    "tag": "forge:molten_zinc"
  }
})
event.custom({	
"type": "embers:melting",
  "bonus": {
    "amount": 30,
    "tag": "forge:molten_iron"
  },
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:crushed_ore/sphalerite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/sphalerite"
  },
  "output": {
    "amount": 120,
    "tag": "forge:molten_zinc"
  }
})
})