ServerEvents.recipes(event => {
event.custom({	
"type": "embers:melting",
  "bonus": {
    "amount": 10,
    "tag": "forge:molten_platinum"
  },
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:crushed_ore/millerite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/millerite"
  },
  "output": {
    "amount": 120,
    "tag": "forge:molten_nickel"
  }
})
})