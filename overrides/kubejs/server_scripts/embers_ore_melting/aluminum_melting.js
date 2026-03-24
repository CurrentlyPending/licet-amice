ServerEvents.recipes(event => {
event.custom({	
"type": "embers:melting",
  "bonus": {
    "amount": 10,
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
            "tag": "forge:crushed_ore/bauxite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/bauxite"
  },
  "output": {
    "amount": 120,
    "tag": "forge:molten_aluminum"
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
            "tag": "forge:crushed_ore/alumina"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/alumina"
  },
  "output": {
    "amount": 150,
    "tag": "forge:molten_aluminum"
  }
})
})