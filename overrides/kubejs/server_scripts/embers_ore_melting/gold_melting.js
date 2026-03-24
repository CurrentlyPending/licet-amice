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
            "tag": "forge:crushed_ore/gold"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/gold"
  },
  "output": {
    "amount": 150,
    "tag": "forge:molten_gold"
  }
})
})