ServerEvents.recipes(event => {
event.custom({	
"type": "embers:melting",
  "bonus": {
    "amount": 10,
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
            "tag": "forge:crushed_ore/cassiterite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/cassiterite"
  },
  "output": {
    "amount": 120,
    "tag": "forge:molten_tin"
  }
})
})