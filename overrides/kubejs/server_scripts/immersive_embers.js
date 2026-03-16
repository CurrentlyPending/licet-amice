ServerEvents.recipes(event => {
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
    "amount": 120,
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
    "amount": 10,
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
            "tag": "forge:crushed_ore/hematite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/hematite"
  },
  "output": {
    "amount": 120,
    "tag": "forge:molten_iron"
  }
})
event.custom({	
"type": "embers:melting",
  "bonus": {
    "amount": 10,
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
            "tag": "forge:crushed_ore/magnetite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/magnetite"
  },
  "output": {
    "amount": 120,
    "tag": "forge:molten_iron"
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
    "amount": 120,
    "tag": "forge:molten_gold"
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
    "amount": 120,
    "tag": "forge:molten_lead"
  }
})
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
    "amount": 120,
    "tag": "forge:molten_silver"
  }
})
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