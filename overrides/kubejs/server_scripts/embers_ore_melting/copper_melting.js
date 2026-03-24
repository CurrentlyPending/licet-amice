ServerEvents.recipes(event => {
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
            "tag": "forge:crushed_ore/copper"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/copper"
  },
  "output": {
    "amount": 150,
    "tag": "forge:molten_copper"
  }
})
event.custom({	
"type": "embers:melting",
  "bonus": {
    "amount": 10,
    "tag": "forge:molten_gold"
  },
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:crushed_ore/cuprite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/cuprite"
  },
  "output": {
    "amount": 120,
    "tag": "forge:molten_copper"
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
            "tag": "forge:crushed_ore/chalcopyrite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/chalcopyrite"
  },
  "output": {
    "amount": 90,
    "tag": "forge:molten_copper"
  }
})
event.custom({	
"type": "embers:melting",
  "bonus": {
    "amount": 60,
    "tag": "forge:molten_nickel"
  },
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:crushed_ore/chalcocite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/chalcocite"
  },
  "output": {
    "amount": 120,
    "tag": "forge:molten_copper"
  }
})
})