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
            "tag": "forge:crushed_ore/chromite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/chromite"
  },
  "output": {
    "amount": 60,
    "tag": "forge:molten_iron"
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
            "tag": "forge:crushed_ore/ilmenite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/ilmenite"
  },
  "output": {
    "amount": 90,
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
  "conditions": [
    {
      "type": "forge:and",
      "values": [
        {
          "type": "forge:not",
          "value": {
            "type": "forge:tag_empty",
            "tag": "forge:crushed_ore/pyrolusite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/pyrolusite"
  },
  "output": {
    "amount": 150,
    "tag": "forge:molten_iron"
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
            "tag": "forge:crushed_ore/wolframite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/wolframite"
  },
  "output": {
    "amount": 120,
    "tag": "forge:molten_iron"
  }
})
event.custom({	
"type": "embers:melting",
  "bonus": {
    "amount": 30,
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
            "tag": "forge:crushed_ore/pyrite"
          }
        }
      ]
    }
  ],
  "input": {
    "tag": "forge:crushed_ore/pyrite"
  },
  "output": {
    "amount": 90,
    "tag": "forge:molten_iron"
  }
})
})