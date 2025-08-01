

export const tree_with_empty_group = {
  type: "group",
  children1: [
    {
      type: "group",
      properties: {
        conjunction: "AND",
        not: false
      },
      children1: []
    },
  ]
};

export const tree_with_incorrect_value_type_in_rule = {
  type: "group",
  children1: [{
    type: "rule",
    properties: {
      field: "num",
      operator: "equal",
      value: ["100"],
      valueType: ["string"],
    }
  }],
};

export const tree_with_missing_value_type_in_rule = {
  type: "group",
  children1: [{
    type: "rule",
    properties: {
      field: "num",
      operator: "equal",
      value: ["5"],
    }
  }],
};

export const tree_with_empty_groups_and_incomplete_rules = {
  type: "group",
  children1: [
    {
      type: "group",
      children1: [
        {
          type: "rule",
          properties: {
            field: "num",
            operator: "between",
          }
        },
      ]
    },
    {
      type: "rule",
      properties: {
        field: "num",
        operator: "is_null",
      }
    },
    {
      type: "group",
      children1: [
        {
          type: "rule",
          properties: {
          }
        },
      ]
    },
    {
      type: "rule",
      properties: {
        field: "num",
        operator: "greater",
      }
    },
    {
      type: "rule",
      properties: {
        field: "num",
        operator: "less",
        value: [100],
      }
    },
    {
      type: "group"
    }
  ]
};

export const tree_with_number = {
  type: "group",
  children1: [
    {
      type: "rule",
      properties: {
        field: "num",
        operator: "equal",
        value: [2],
        valueSrc: ["value"],
        valueType: ["number"]
      }
    },
  ],
  properties: {
    conjunction: "AND",
    not: false
  }
};

export const empty = {
  "and": []
};

export const with_number = {
  "and": [{
    "==": [
      { "var": "num" },  2
    ]
  }]
};

export const with_uneven_number = {
  "and": [{
    "==": [
      { "var": "evenNum" },  7
    ]
  }]
};

export const with_uneven_number_bigger_than_max = {
  "and": [{
    "==": [
      { "var": "evenNum" },  13
    ]
  }]
};

export const with_numLess5_eq_7 = {
  "and": [{
    "==": [
      { "var": "numLess5" },  7
    ]
  }]
};

export const with_number_bigger_than_max = {
  "and": [{
    "==": [
      { "var": "num" },  200
    ]
  }]
};

export const with_range_bigger_than_max = {
  "and": [{
    "<=": [
      100,
      { "var": "num" },
      200
    ]
  }]
};

export const with_range_from_field_to_big_number = {
  "and": [{
    "<=": [
      { "var": "numField" },
      { "var": "num" },
      100
    ]
  }]
};

export const with_bad_range = {
  "and": [{
    "<=": [
      4,
      { "var": "num" },
      3
    ]
  }]
};

export const with_bad_range_bigger_than_max = {
  "and": [{
    "<=": [
      400,
      { "var": "num" },
      300
    ]
  }]
};

export const with_range_slider = {
  "and": [{
    "<=": [
      18,
      { "var": "slider" },
      42
    ]
  }]
};

export const with_bad_date_range = {
  "and": [{
    "<=": [
      "2020-05-15T21:00:00.000Z", 
      { "var": "date" },
      "2020-05-10T21:00:00.000Z"
    ]
  }]
};

export const with_date_range = {
  "and": [{
    "<=": [
      "2020-05-10T21:00:00.000Z",
      { "var": "date" },
      "2020-05-15T21:00:00.000Z"
    ]
  }]
};

export const with_range_bad_dates = {
  "and": [{
    "<=": [
      "2020-05-10TTTT",
      { "var": "date" },
      "2020-05-15T21:00:00.000Z"
    ]
  }]
};

export const with_undefined_as_number = {
  "and": [{
    "==": [
      { "var": "num" },  undefined
    ]
  }]
};

export const with_number_not_in_group = {
  "==": [
    { "var": "num" },  2
  ]
};

export const with_number_and_string = {
  "or": [{
    "<": [
      { "var": "num" },  2
    ]
  }, {
    "==": [
      { "var": "login" },  "ukrbublik"
    ]
  }]
};

export const with_not_number_and_string = {
  "!": {
    "or": [{
      "<": [ { "var": "num" }, 2 ]
    }, {
      "==": [
        { "var": "login" },  "ukrbublik"
      ]
    }]
  }
};

export const with_less = {
  "<": [ { "var": "num" }, 2 ]
};

export const with_date_and_time = {
  "or": [{
    "datetime==": [ { "var": "datetime" }, "2020-05-18T21:50:01.000Z" ]
  }, {
    "and": [{
      "date==": [ {  "var": "date" }, "2020-05-18T21:00:00.000Z" ]
    }, {
      "==": [ { "var": "time" }, 3000 ]
    }]
  }]
};

export const with_date_epoch = {
  "and": [
    {
      "datetime==": [ { "var": "datetime" }, "1736782768" ]
    }
  ]
};

export const with_date_epoch_ms = {
  "and": [
    {
      "datetime==": [ { "var": "datetime" }, "1736782768000" ]
    }
  ]
};

export const with_select_and_multiselect = {
  "and": [{
    "==": [ { "var": "color" }, "yellow" ]
  }, {
    "all": [
      { "var": "multicolor" },
      { "in": [ { "var": "" }, [ "yellow", "green" ] ] }
    ]
  }]
};

export const with_struct_and_group = {
  "and": [
    {
      "and": [
        { "==": [ { "var": "results.slider" }, 22 ] },
        { "<=": [ 13, { "var": "results.slider" }, 36 ] },
        { "==": [ { "var": "results.stock" }, true ] }
      ]
    },
    { "==": [ { "var": "user.firstName" }, "abc" ] },
    { "!!": { "var": "user.login" } }
  ]
};

export const with_struct_and_group_mixed_obsolete = {
  "and": [
    { "==": [ { "var": "results.slider" }, 22 ] },
    { "==": [ { "var": "user.firstName" }, "abc" ] },
  ]
};

export const with_is_empty_in_some = {
  "and": [
    { "some": [
      { "var": "results" },
      {
        "!": { "var": "grade" }
      }
    ] }
  ]
};
export const spel_with_is_empty_in_some = "results.?[grade <= ''].size() > 0";

export const with_bad_subfield_in_group = {
  "and": [
    { "some": [
      { "var": "results" },
      {
        "!": { "var": "bad-subfield" }
      }
    ] }
  ]
};

export const with_nested_and_select_any_in_in_some = {
  "and": [
    { "some": [
      { "var": "vehicles.cars" },
      { "in": [ { "var": "vendor" }, [ "Ford", "Toyota" ] ] }
    ] }
  ]
};

export const with_nested_and_like_in_some = {
  "and": [
    { "some": [
      { "var": "vehicles.cars" },
      { "in": [ "coro", { "var": "model" } ] }
    ] }
  ]
};

export const with_select_not_any_in_in_some = {
  "and": [
    { "some": [
      { "var": "cars" },
      { "!":
        { "in": [ { "var": "vendor" }, [ "Ford", "Toyota" ] ] }
      }
    ] }
  ]
};
export const spel_with_select_not_any_in_in_some = "cars.?[!({'Ford', 'Toyota'}.?[true].contains(vendor))].size() > 0";

export const with_empty_group_some = {
  type: "group",
  children1: [{
    type: "rule_group",
    properties: {
      mode: "array",
      operator: "some",
      field: "cars",
    }
  }]
};

export const spel_with_not_select_not_any_in_in_some = "cars.?[!(!({'Ford', 'Toyota'}.?[true].contains(vendor)))].size() > 0";
export const with_not_select_not_any_in_in_some = {
  "and": [
    {
      "some": [
        { "var": "cars" },
        {
          "!": {
            "!": {
              "in": [
                { "var": "vendor" },
                [ "Ford", "Toyota" ]
              ]
            }
          }
        }
      ]
    }
  ]
};

export const with_select_any_in_in_some = {
  "and": [
    { "some": [
      { "var": "cars" },
      { "in": [ { "var": "vendor" }, [ "Ford", "Toyota" ] ] }
    ] }
  ]
};
export const spel_with_select_any_in_in_some = "cars.?[{'Ford', 'Toyota'}.?[true].contains(vendor)].size() > 0";

export const with_not_and_in_some = {
  "and": [
    { "some": [
      { "var": "cars" },
      { "!": { "and": [
        { "==": [ { "var": "year" }, null ] },
        { "!": { "in": [ { "var": "vendor" }, [ "Ford", "Toyota" ] ] } }
      ] } }
    ] }
  ]
};
export const spel_with_not_and_in_some = "cars.?[!(year == null && !({'Ford', 'Toyota'}.?[true].contains(vendor)))].size() > 0";

export const with_not_and_neg_in_some = {
  "and": [
    { "some": [
      { "var": "cars" },
      { "in": [ { "var": "vendor" }, [ "Ford", "Toyota" ] ] }
    ] },
    { "some": [
      { "var": "cars" },
      { "!": { "and": [ { "<=": [ 1995, { "var": "year" }, 2005 ] } ] } }
    ] },
    { "some": [
      { "var": "cars" },
      { "!": { "in": [ "ggg1", { "var": "model" } ] } }
    ] },
    { "some": [
      { "var": "cars" },
      { "!": { "!": { "in": [ "ggg2", { "var": "model" } ] } } }
    ] },
    { "some": [
      { "var": "cars" },
      { "and": [ { "!": { "and": [ { "!": { "in": [ "ggg3", { "var": "model" } ] } } ] } } ] }
    ] },
    { "all": [
      { "var": "cars" },
      { "!": { "in": [ { "var": "vendor" }, [ "Ford", "Tesla" ] ] } }
    ] },
    { "all": [
      { "var": "cars" },
      { "!": { "and": [ { "!": { "in": [ { "var": "vendor" }, [ "BMW", "Toyota" ] ] } } ] } }
    ] },
    { "some": [
      { "var": "cars" },
      { "!": { "and": [ { "!": { "in": [ { "var": "vendor" }, [ "Tesla", "Toyota" ] ] } } ] } }
    ] },
    { "some": [
      { "var": "cars" },
      { "!": { "!": { "in": [ { "var": "vendor" }, [ "Ford", "BMW" ] ] } } }
    ] },
    { "some": [
      { "var": "cars" },
      { "!": { "!": { "!": { "in": [ { "var": "vendor" }, [ "BMW", "Tesla" ] ] } } } }
    ] }
  ]
};

export const with_not_and_neg_in_some_reversed = {
  "and": [
    { "some": [
      { "var": "cars" },
      { "in": [ { "var": "vendor" }, [ "Ford", "Toyota" ] ] }
    ] },
    { "some": [
      { "var": "cars" },
      { "!": { "<=": [ 1995, { "var": "year" }, 2005 ] } }
    ] },
    { "some": [
      { "var": "cars" },
      { "!": { "in": [ "ggg1", { "var": "model" } ] } }
    ] },
    { "some": [
      { "var": "cars" },
      { "in": [ "ggg2", { "var": "model" } ] }
    ] },
    { "some": [
      { "var": "cars" },
      { "in": [ "ggg3", { "var": "model" } ] }
    ] },
    { "all": [
      { "var": "cars" },
      { "!": { "in": [ { "var": "vendor" }, [ "Ford", "Tesla" ] ] } }
    ] },
    { "all": [
      { "var": "cars" },
      { "in": [ { "var": "vendor" }, [ "BMW", "Toyota" ] ] }
    ] },
    { "some": [
      { "var": "cars" },
      { "in": [ { "var": "vendor" }, [ "Tesla", "Toyota" ] ] }
    ] },
    { "some": [
      { "var": "cars" },
      { "in": [ { "var": "vendor" }, [ "Ford", "BMW" ] ] }
    ] },
    { "some": [
      { "var": "cars" },
      { "!": { "in": [ { "var": "vendor" }, [ "BMW", "Tesla" ] ] } }
    ] }
  ]
};

export const with_nested_group = {
  "and": [
    { "some": [
      { "var": "results" },
      {
        "and": [
          {
            ">": [  { "var": "score" },  15  ]
          }, {
            "some": [
              { "var": "user" },
              { "==": [  { "var": "name" },  "denis"  ] }
            ]
          }
        ]
      }
    ] }
  ]
};

export const spel_with_nested_group = "results.?[score > 15 && user.?[name == 'denis'].size() > 0].size() > 0";

export const two_rules_with_nested_group = {
  "and": [
    {
      "some": [
        { "var": "results" },
        { "==": [  { "var": "score" },  11  ] }
      ]
    },
    {
      "some": [
        { "var": "results" },
        { "some": [
          { "var": "user" },
          { "==": [ { "var": "name" },  "aaa" ] }
        ] }
      ]
    }
  ]
};

export const spel_two_rules_with_nested_group = "(results.?[user.?[name == 'aaa'].size() > 0].size() > 0 && results.?[score == 11].size() > 0)";

export const with_struct_inside_group = {
  "and": [
    {
      "some": [
        { "var": "results" },
        { "==": [  { "var": "user.name" },  "ddd"  ] }
      ]
    }
  ]
};

export const with_struct_inside_group_1_1s = {
  "and": [
    {
      "some": [
        { "var": "results" },
        { "and": [
          { ">=": [  { "var": "user.age" },  18  ] },
          { "==": [  { "var": "score" },  5  ] }
        ] }
      ]
    }
  ]
};

export const with_struct_inside_group_2 = {
  "and": [
    {
      "some": [
        { "var": "results" },
        { "and": [
          { "==": [  { "var": "user.name" },  "denis"  ] },
          { ">=": [  { "var": "user.age" },  18  ] }
        ] }
      ]
    }
  ]
};

export const with_struct_inside_group_1_1 = {
  "and": [
    {
      "some": [
        { "var": "results" },
        { "and": [
          { "==": [  { "var": "user.name" },  "denis"  ] },
          { "==": [  { "var": "quiz.name" },  "ethics"  ] }
        ] }
      ]
    }
  ]
};

export const with_struct_inside_group_2_2 = {
  "and": [
    {
      "some": [
        { "var": "results" },
        { "and": [
          { "==": [  { "var": "user.name" },  "denis"  ] },
          { "==": [  { "var": "quiz.name" },  "ethics"  ] },
          { ">=": [  { "var": "user.age" },  18  ] },
          { ">": [  { "var": "quiz.max_score" },  70  ] }
        ] }
      ]
    }
  ]
};

export const with_struct_inside_group_1_1_1s = {
  "and": [
    {
      "some": [
        { "var": "results" },
        { "and": [
          { ">=": [  { "var": "user.age" },  18  ] },
          { ">": [  { "var": "quiz.max_score" },  70  ] },
          { "<": [  { "var": "score" },  70  ] }
        ] }
      ]
    }
  ]
};

export const with_two_groups_1 = {
  "and": [
    {
      "and": [
        {
          "==": [ { "var": "results.user.name" },  "ddd" ]
        },
        {
          "==": [ { "var": "results.score" },  2 ]
        },
      ]
    },
    {
      "==": [ { "var": "group2.inside" },  33 ]
    },
    {
      "==": [ { "var": "results.score" },  2 ]
    },
    {
      "==": [ { "var": "num" },  -1 ]
    }
  ]
};

export const with_group_inside_struct_1 = {
  "and": [
    {
      "some": [
        { "var": "vehicles.cars" },
        { "and": [
          { "==": [ { "var": "vendor" }, "Toyota" ] }
        ] }
      ]
    }
  ]
};

export const with_group_inside_struct_2 = {
  "and": [
    {
      "some": [
        { "var": "vehicles.cars" },
        { "and": [
          { "==": [ { "var": "vendor" }, "Toyota" ] },
          { "==": [ { "var": "year" }, 2006 ] }
        ] }
      ]
    }
  ]
};

export const with_group_and_struct_deep = {
  "and": [
    {
      "some": [
        { "var": "vehicles.cars" },
        {
          "and": [
            { "==": [ { "var": "manufactured.vendor" }, "Toyota" ] },
            {
              "some": [
                { "var": "manufactured.type" },
                {
                  "and": [
                    { "==": [ { "var": "segment" }, "C" ] },
                    { "==": [ { "var": "class" }, "Mid" ] }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const with_group_and_struct_deep_old = {
  "and": [
    {
      "some": [
        { "var": "vehicles.cars" },
        {
          "and": [
            { "==": [ { "var": "manufactured.vendor" }, "Toyota" ] },
            { "==": [ { "var": "manufactured.type.segment" }, "C" ] },
            { "==": [ { "var": "manufactured.type.class" }, "Mid" ] },
          ]
        }
      ]
    }
  ]
};

export const with_group_and_struct_deep_old2 = {
  "and": [
    { "==": [ { "var": "vehicles.cars.manufactured.vendor" }, "Toyota" ] },
    { "==": [ { "var": "vehicles.cars.manufactured.type.segment" }, "C" ] },
    { "==": [ { "var": "vehicles.cars.manufactured.type.class" }, "Mid" ] },
  ]
};

export const with_number_field_compare = {
  "and": [
    { "==": [ { "var": "num" }, { "var": "num2" } ] }
  ]
};

export const with_2_numbers = {
  "and": [
    { "==": [ { "var": "num" }, 2 ] },
    { "==": [ { "var": "num" }, 3 ] }
  ]
};

export const with_num_and_num2 = {
  "and": [
    { "==": [ { "var": "num" }, 2 ] },
    { "==": [ { "var": "num2" }, 3 ] }
  ]
};

export const with_group = {
  "or": [{
    "and": [
      {
        "==": [ { "var": "num" }, 1 ]
      }, {
        "==": [ { "var": "num" }, 2 ]
      }
    ]
  }]
};

export const with_text = {
  "and": [{  "==": [ { "var": "str" }, "abc" ]  }]
};

export const with_date = {
  "and": [{  "==": [ { "var": "date" }, "2020-05-26T00:00:00.000Z" ]  }]
};

export const with_datetime = {
  "and": [{  "==": [ { "var": "datetime" }, "2020-05-26T02:30:00.000Z" ]  }]
};

export const with_select = {
  "and": [{  "==": [ { "var": "color" }, "orange" ]  }]
};

export const with_bad_select_value = {
  "and": [{  "==": [ { "var": "color" }, "unexisting" ]  }]
};

export const with_bool = {
  "and": [{  "==": [ { "var": "stock" }, true ]  }]
};

export const with_slider = {
  "and": [{  "==": [ { "var": "slider" }, 32 ]  }]
};

export const with_time = {
  "and": [{  "==": [ { "var": "time" }, 60*60*2+60*20 ]  }]
};

export const with_multiselect = {
  "and": [
    {
      "all": [
        { "var": "multicolor" },
        { "in": [ { "var": "" }, [ "green", "orange" ] ] }
      ]
    }
  ]
};

export const with_bad_multiselect_value = {
  "and": [
    {
      "all": [
        { "var": "multicolor" },
        { "in": [ { "var": "" }, [ "unexisting1", "orange", "unexisting2" ] ] }
      ]
    }
  ]
};

export const with_treeselect = {
  "and": [{  "==": [ { "var": "selecttree" }, "2" ]  }]
};

export const with_price = {
  "and": [{  ">": [ { "var": "price" }, 23.45 ]  }]
};

export const with_ops = {
  "and": [
    {
      "==": [ { "var": "text" },  "Long\nText" ]
    }, {
      "!=": [ { "var": "num" },  2 ]
    }, {
      "in": [ "abc",  { "var": "str" } ]
    }, {
      "!": {
        "in": [ "xyz", { "var": "str" } ]
      }
    }, {
      "<=": [  1,  { "var": "num" },  2  ]
    }, {
      "!": {
        "<=": [  3,  { "var": "num" },  4  ]
      }
    }, {
      "!": { "var": "num" }
    }, {
      "in": [
        { "var": "color" },
        [ "yellow" ]
      ]
    }, {
      "!": {
        "in": [
          { "var": "color" },  [ "green" ]
        ]
      }
    }, {
      "!": {
        "all": [
          { "var": "multicolor" },
          { "in": [ { "var": "" },  [ "yellow" ] ] }
        ]
      }
    }
  ]
};


export const with_in_ops = {
  "and": [
    {
      "in": [
        { "var": "color" },
        { "var": "multicolor" },
      ]
    },
    {
      "in": [
        { "var": "text" },
        { "var": "str" },
      ]
    },
  ]
};

export const with_in_ops_spel = "(multicolor.contains(color) && str.contains(text))";

export const with_ops_sql = "(text = 'Long\\nText' AND num <> 2 AND str LIKE '%abc%' AND str NOT LIKE '%xyz%' AND num BETWEEN 1 AND 2 AND num NOT BETWEEN 3 AND 4 AND num IS NULL AND color IN ('yellow') AND color NOT IN ('green') AND multicolor != 'yellow')";

export const with_ops_and_negation_groups = {
  "and": [
    {
      "==": [ { "var": "text" },  "Long\nText" ]
    }, {
      "!=": [ { "var": "num" },  2 ]
    }, {
      "in": [ "abc",  { "var": "str" } ]
    }, {
      "!": {
        "and": [
          {
            "in": [ "xyz", { "var": "str" } ]
          }
        ]
      }
    }, {
      "<=": [  1,  { "var": "num" },  2  ]
    }, {
      "!": {
        "and": [
          {
            "<=": [  3,  { "var": "num" },  4  ]
          }
        ]
      }
    }, {
      "!": { "var": "num" }
    }, {
      "in": [
        { "var": "color" },
        [ "yellow" ]
      ]
    }, {
      "!": {
        "and": [
          {
            "in": [
              { "var": "color" },  [ "green" ]
            ]
          }
        ]
      }
    }, {
      "!": {
        "and": [
          {
            "all": [
              { "var": "multicolor" },
              { "in": [ { "var": "" },  [ "yellow" ] ] }
            ]
          }
        ]
      }
    }
  ]
};

export const exclamation_operators_and_negation_groups = {
  "and": [
    {"!": {"and": [{"in": ["abc3", {"var": "str"}]}]}},
    {"!": {"in": ["xyz", {"var": "str"}]}},
    {"!": {"and": [{"<=": [1, {"var": "num"}, 2]}]}},
    {"!": {"<=": [3, {"var": "num"}, 4]}},
    {"!": {"and": [{"in": [{"var": "color"}, ["yellow"]]}]}},
    {"!": {"in": [{"var": "color"}, ["green"]]}},
    {"!": {"and": [{"all": [{"var": "multicolor"}, {"in": [{"var": ""}, ["yellow"]]}]}]}},
    {"!": {"all": [{"var": "multicolor"}, {"in": [{"var": ""}, ["yellow"]]}]}},
    {"!": {"and": [{"some": [{"var": "multicolor"}, {"in": [{"var": ""}, ["green"]]}]}]}},
    {"!": {"some": [{"var": "multicolor"}, {"in": [{"var": ""}, ["green"]]}]}},
    {"==": [{"var": "str"}, null]}
  ]
};

export const exclamation_operators_and_negation_groups_reversed = {
  "and": [
    {"!": {"in": ["abc3", {"var": "str"}]}},
    {"!": {"in": ["xyz", {"var": "str"}]}},
    {"!": {"<=": [1, {"var": "num"}, 2]}},
    {"!": {"<=": [3, {"var": "num"}, 4]}},
    {"!": {"in": [{"var": "color"}, ["yellow"]]}},
    {"!": {"in": [{"var": "color"}, ["green"]]}},
    {"!": {"all": [{"var": "multicolor"}, {"in": [{"var": ""}, ["yellow"]]}]}},
    {"!": {"all": [{"var": "multicolor"}, {"in": [{"var": ""}, ["yellow"]]}]}},
    {"!": {"some": [{"var": "multicolor"}, {"in": [{"var": ""}, ["green"]]}]}},
    {"!": {"some": [{"var": "multicolor"}, {"in": [{"var": ""}, ["green"]]}]}},
    {"==": [{"var": "str"}, null]}
  ]
};

export const with_multiselecttree = {
  "and": [
    {
      "all": [
        { "var": "multiselecttree" },
        { "in": [ { "var": "" }, [ "2", "5" ] ] }
      ]
    }
  ]
};

export const with_number_and_group_3 = {
  "or": [
    { "==": [ { "var": "num" }, 1 ] },
    { "and": [
      {
        "==": [ { "var": "num" }, 2 ]
      }, {
        "==": [ { "var": "num" }, 3 ]
      }, {
        "==": [ { "var": "num" }, 4 ]
      }
    ]}
  ]
};

export const with_number_and_group_1 = {
  "or": [
    { "==": [ { "var": "num" }, 1 ] },
    { "and": [
      {
        "==": [ { "var": "num" }, 2 ]
      }
    ]}
  ]
};

export const with_number_and_group = {
  "or": [
    { "==": [ { "var": "num" }, 1 ] },
    { "and": [
      {
        "==": [ { "var": "num" }, 2 ]
      }, {
        "==": [ { "var": "num" }, 3 ]
      }
    ]}
  ]
};

export const with_numbers_and_group = {
  "or": [
    { "==": [ { "var": "num" }, 1 ] },
    { "==": [ { "var": "num" }, 2 ] },
    { "and": [
      {
        "==": [ { "var": "num" }, 3 ]
      }, {
        "==": [ { "var": "num" }, 4 ]
      }
    ]}
  ]
};

export const with_groups = {
  "or": [
    { "and": [
      {
        "==": [ { "var": "num" }, 1 ]
      }, {
        "==": [ { "var": "num" }, 2 ]
      }
    ]}, { "and": [
      {
        "==": [ { "var": "num" }, 3 ]
      }, {
        "==": [ { "var": "num" }, 4 ]
      }
    ]}
  ]
};

export const with_empty_and_single_rule_groups = {
  "or": [
    { "and": [
      {
        "==": [ { "var": "num" }, 1 ]
      }
    ]}, { "and": []}
  ]
};

export const with_nested = {
  "and": [
    { "==": [ { "var": "user.info.firstName" }, "abc" ] },
  ]
};

export const with_func_tolower_from_field = {
  "and": [
    {
      "==": [
        { "var": "str" },
        { "toLowerCase": [
          { "var": "str2" }
        ] }
      ]
    }
  ]
};

export const with_func_tolower_and_contains_op = {
  "and": [
    {
      "in": [
        "aa",
        {
          "toLowerCase": [
            "AAA"
          ]
        }
      ]
    }
  ]
};

export const with_func_linear_regression_tree = {
  type: "group",
  children1: [
    {
      type: "rule",
      properties: {
        field: "num",
        operator: "equal",
        value: [
          {
            func: "LINEAR_REGRESSION",
            args: {
              coef: { value: 2 },
              bias: { value: 0 },
              val: { value: 3 }
            }
          }
        ],
        valueSrc: [ "func" ],
        valueType: [ "number" ],
        valueError: [ null ]
      }
    },
  ],
  properties: {
    conjunction: "AND",
    not: false
  }
};


export const with_func_linear_regression = {
  "and": [
    {
      "==": [
        { "var": "num" },
        { "+": [ { "*": [ 2, 3 ] }, 0 ] }
      ]
    }
  ]
};

export const with_func_relative_datetime = {
  "and": [ {
    "datetime==": [
      { "var": "datetime" },
      { "datetime_add": [ { "now": [] }, 2, "day" ] }
    ]
  } ]
};

export const with_func_relative_date = {
  "and": [ {
    "date==": [
      { "var": "date" },
      { "date_add": [ { "today": [] }, 2, "day" ] }
    ]
  } ]
};

export const with_func_sum_of_multiselect = {
  "and": [ {
    "==": [
      { "var": "num" },
      { "sumOfMultiselect": [
        [3, 5]
      ] }
    ]
  } ]
};

export const with_func_sum_of_multiselect_spel = "num == {5}.sumOfMultiselect()";

export const with_func_sum_of_multiselect_in_lhs = {
  "and": [
    {
      "<=": [
        { "sumOfMultiselect": [
          [ 1, 2]
        ] },
        { "sumOfMultiselect": [
          [ 3, 4]
        ] },
        { "sumOfMultiselect": [
          [ 5, 6]
        ] },
      ]
    }
  ]
};

export const tree_with_vfunc_in_lhs_with_missing_args = {
  type: "group",
  children1: [{
    type: "rule",
    properties: {
      fieldSrc: "func",
      field: {
        func: "vld.tfunc1",
        args: {
          str1: { valueSrc: "value", value: "aaaaa" },
          str2: { valueSrc: "value", value: "bbbbb" },
          // num1 has defaultValue
          // num2 has NO defaultValue !!!
        },
      },
      operator: "equal",
      value: ["xxxxxx"],
      valueSrc: ["value"],
    },
  }]
};

export const tree_with_vfunc_in_lhs_with_invalid_args_and_rhs = {
  type: "group",
  children1: [{
    type: "rule",
    properties: {
      fieldSrc: "func",
      field: {
        func: "vld.tfunc1",
        args: {
          str1: { valueSrc: "value", value: "aaaaaa" },
          str2: { valueSrc: "value", value: "bbbbbb" },
          num1: { valueSrc: "value", value: 20 },
          num2: { valueSrc: "value", value: 4 },
        },
      },
      operator: "equal",
      value: ["xxxxxx"],
      valueSrc: ["value"],
    },
  }]
};

export const tree_with_vfunc_in_both_sides_with_invalid_args_in_nested_funcs = {
  type: "group",
  children1: [{
    type: "rule",
    properties: {
      fieldSrc: "func",
      field: {
        func: "vld.tfunc1",
        args: {
          str1: { valueSrc: "value", value: "aaaaaa" },
          str2: {
            valueSrc: "func",
            value: {
              func: "vld.tfunc1",
              args: {
                str1: { valueSrc: "value", value: "_aaaaaa" },
                // str2 has defaultValue
                // num1 has defaultValue
                num2: { valueSrc: "value", value: 4 },
              }
            }
          },
          num1: { valueSrc: "value", value: 20 },
          num2: { valueSrc: "value", value: 4 },
        },
      },
      operator: "equal",
      value: [{
        func: "vld.tfunc1",
        args: {
          // str1 has defaultValue
          str2: { valueSrc: "value", value: "rbbbbbb" },
          // num1 has defaultValue
          num2: { valueSrc: "value", value: 13 },
        }
      }],
      valueSrc: ["func"],
    },
  }]
};

export const tree_with_vfunc_in_both_sides_with_missing_args_in_nested_funcs = {
  type: "group",
  children1: [{
    type: "rule",
    properties: {
      fieldSrc: "func",
      field: {
        func: "vld.tfunc1",
        args: {
          str1: {
            valueSrc: "func",
            value: {
              func: "vld.tfunc2",
              args: {
                // num1 has defaultValue
                num2: { valueSrc: "value", value: 3 },
                num3: { valueSrc: "value", value: 4 },
              },
            }
          },
          str2: {
            valueSrc: "func",
            value: {
              func: "vld.tfunc2",
              args: {
                num1: { valueSrc: "value", value: -13 },
                // num2 has NO defaultValue !!!
                num3: { valueSrc: "value", value: -14 },
              }
            }
          },
          num1: { valueSrc: "value", value: 20 },
          num2: { valueSrc: "value", value: 4 },
        },
      },
      operator: "equal",
      value: [{
        func: "vld.tfunc1",
        args: {
          str1: { valueSrc: "value", value: "raaaaaaa" },
          str2: { valueSrc: "value", value: "rbbb" },
          num1: { valueSrc: "value", value: 3 },
          num2: { valueSrc: "value", value: 4 },
        }
      }],
      valueSrc: ["func"],
    },
  }]
};

export const tree_with_vfunc2_at_lhs = {
  type: "group",
  children1: [{
    type: "rule",
    properties: {
      fieldSrc: "func",
      field: {
        func: "vld.tfunc2",
        args: {
          num1: { valueSrc: "value", value: 7 },
          num2: { valueSrc: "value", value: 7 },
          num3: { valueSrc: "value", value: 7 },
        }
      },
      operator: "equal",
      value: ["xxxxxxx"]
    }
  }],
};

export const tree_with_vfunc2_at_lhs_without_valueSrc = {
  type: "group",
  children1: [{
    type: "rule",
    properties: {
      fieldSrc: "func",
      field: {
        func: "vld.tfunc2",
        args: {
          num1: { value: 7 },
          num2: { value: 3 },
          num3: { value: 7 },
        }
      },
      operator: "equal",
      value: ["xxxxxxx"]
    }
  }],
};

export const tree_with_vfunc2_at_lhs_and_long_rhs = {
  type: "group",
  children1: [{
    type: "rule",
    properties: {
      fieldSrc: "func",
      field: {
        func: "vld.tfunc2",
        args: {
          num1: { valueSrc: "value", value: 7 },
          num2: { valueSrc: "value", value: 7 },
          num3: { valueSrc: "value", value: 7 },
        }
      },
      operator: "equal",
      value: ["xxxxxyyyyyzzz"]
    }
  }],
};

export const tree_with_vfunc2_at_lhs_with_missing_args = {
  type: "group",
  children1: [{
    type: "rule",
    properties: {
      fieldSrc: "func",
      field: {
        func: "vld.tfunc2",
        args: {
          num1: { valueSrc: "value", value: 7 },
        }
      },
      operator: "equal",
      value: ["xxxxxyyyyyzzz"]
    }
  }],
};

export const with_prox = {
  type: "group",
  children1: [
    {
      type: "rule",
      properties: {
        field: "str",
        operator: "proximity",
        value: [ "a", "b" ],
        valueSrc: [ "value", "value" ],
        valueType: [ "text", "text" ],
        operatorOptions: {
          proximity: 3
        }
      }
    },
  ],
  properties: {
    conjunction: "AND",
    not: false
  }
};

export const with_prox1 = {
  type: "group",
  children1: [
    {
      type: "rule",
      properties: {
        field: "prox1",
        operator: "proximity",
        value: [ "a", "b" ],
        operatorOptions: {
          proximity: 3
        }
      }
    },
  ],
};

export const with_prox1_no_values = {
  type: "group",
  children1: [
    {
      type: "rule",
      properties: {
        field: "prox1",
        operator: "proximity",
        operatorOptions: {
          proximity: 3
        }
      }
    },
  ],
};

export const with_jl_value = {
  "==": [
    { "var": "num" },  { "+": [1, 2] }
  ]
};

export const with_group_array_cars = {
  "and": [
    { ">": [
      { "reduce": [
        { "filter": [
          { "var": "cars" },
          { "and": [
            {
              "==": [ { "var": "vendor" }, "Toyota" ]
            }, {
              ">=": [ { "var": "year" }, 2010 ]
            }
          ] }
        ] },
        { "+": [ 1, { "var": "accumulator" } ] },
        0
      ] },
      2
    ] }
  ]
};

export const with_group_array_cars_bad_count_and_year = {
  "and": [
    { ">": [
      { "reduce": [
        { "filter": [
          { "var": "cars" },
          { "and": [
            {
              "==": [ { "var": "vendor" }, "Toyota" ]
            }, {
              ">=": [ { "var": "year" }, 3000 ]
            }
          ] }
        ] },
        { "+": [ 1, { "var": "accumulator" } ] },
        0
      ] },
      222
    ] }
  ]
};

export const with_group_count = {
  "and": [
    { "==": [
      { "reduce": [
        { "var": "cars" },
        {  "+": [ 1, {  "var": "accumulator" } ] },
        0
      ] },
      2
    ] }
  ]
};
export const spel_with_group_count = "cars.size() == 2";

export const with_not_group_count = {
  "and": [
    { "!":
      { "==": [
        { "reduce": [
          { "var": "cars" },
          {  "+": [ 1, {  "var": "accumulator" } ] },
          0
        ] },
        2
      ] }
    }
  ]
};
export const with_not_group_count_out = {
  "and": [
    { "!=": [
      { "reduce": [
        { "var": "cars" },
        {  "+": [ 1, {  "var": "accumulator" } ] },
        0
      ] },
      2
    ] }
  ]
};
export const spel_with_not_group_count = "!(cars.size() == 2)";
export const spel_with_not_group_count_out = "cars.size() != 2";

export const with_not_group_not_filter = {
  "!": {
    "and": [
      { "==": [
        { "reduce": [
          {  "filter": [
            { "var": "cars" },
            {
              "!": { "==": [
                { "var": "vendor" },
                "Toyota"
              ] }
            }
          ] },
          { "+": [ 1, { "var": "accumulator" } ] },
          0
        ] },
        6
      ] }
    ]
  }
};
export const with_not_group_not_filter_out = {
  "!": {
    "and": [
      { "==": [
        { "reduce": [
          {  "filter": [
            { "var": "cars" },
            {
              "!=": [
                { "var": "vendor" },
                "Toyota"
              ]
            }
          ] },
          { "+": [ 1, { "var": "accumulator" } ] },
          0
        ] },
        6
      ] }
    ]
  }
};

export const spel_with_not_group_not_filter = "!(cars.?[!(vendor == 'Toyota')].size() == 6)";
export const spel_with_not_group_not_filter_out = "cars.?[vendor != 'Toyota'].size() != 6";

export const with_not_some_not_is_null = {
  "!": {
    "and": [
      { "some": [
        { "var": "cars" },
        { "!": {
          "==": [
            { "var": "vendor" },
            null
          ]
        } }
      ] }
    ]
  }
};
export const with_not_some_not_is_null_out = {
  "!": {
    "and": [
      { "some": [
        { "var": "cars" },
        { "!=": [
          { "var": "vendor" },
          null
        ] }
      ] }
    ]
  }
};

export const spel_with_not_some_not_is_null = "!(cars.?[!(vendor == null)].size() > 0)";
export const spel_with_not_some_not_is_null_out = "!(cars.?[vendor != null].size() > 0)";

export const spel_with_not_some_not_contains = "!(results.?[!(grade.contains('Toy'))].size() > 0)";

export const with_group_array_custom_operator = {
  "and": [
    { "custom_group_operator": [
      { "var": "cars" },
      { "and": [
        {
          "==": [ { "var": "vendor" }, "Toyota" ]
        }, {
          ">=": [ { "var": "year" }, 2010 ]
        }
      ] }
    ] }
  ]
};

export const with_group_array_custom_operator2 = {
  "and": [
    { "custom2": [
      "--some-extra-data-1--",
      { "var": "cars" },
      { "and": [
        {
          "==": [ { "var": "vendor" }, "Toyota" ]
        }, {
          ">=": [ { "var": "year" }, 2010 ]
        }
      ] }
    ] }
  ]
};

export const with_group_array_custom_operator3 = {
  "and": [
    { "custom3": [
      "--some-extra-data-1--",
      "cars",
      123,
      { "and": [
        {
          "==": [ { "var": "vendor" }, "Toyota" ]
        }, {
          ">=": [ { "var": "year" }, 2010 ]
        }
      ] }
    ] }
  ]
};

export const with_group_array_custom_operator4 = {
  "and": [
    { "custom4": [
      "--some-extra-data-1--",
      "cars",
      123,
      456,
      { "and": [
        {
          "==": [ { "var": "vendor" }, "Toyota" ]
        }, {
          ">=": [ { "var": "year" }, 2010 ]
        }
      ] }
    ] }
  ]
};

export const with_autocomplete_strict_a = {
  "and": [{
    "==": [
      { "var": "autocompleteStrict" },
      "a"
    ]
  }]
};

export const with_autocomplete_multi_strict_a = {
  "and": [{
    "all": [
      { "var": "autocompleteMultipleStrict" },
      { "in": [{ "var": "" },
        [
          "a"
        ]
      ]}
    ]
  }]
};

export const with_different_groups = {
  "and": [
    {
      "some": [
        { "var": "results" },
        {
          "and": [
            { "==": [ { "var": "score" }, 5 ] },
            { "==": [ { "var": "grade" }, "A" ] }
          ]
        }
      ]
    },
    {
      "some": [
        { "var": "cars" },
        {
          "and": [
            { "==": [ { "var": "vendor" }, "Toyota" ] },
            { "==": [ { "var": "year" }, 2006 ] }
          ]
        }
      ]
    },
    {
      "or": [
        { "==": [ { "var": "num" }, 5 ] },
        { "==": [ { "var": "str" }, "five" ] }
      ]
    }
  ]
};

// rare
export const with_fieldName = {
  "and": [{
    "==": [
      { "var": "state.input.num" },  2
    ]
  }]
};

export const spel_with_fieldName = "state.input.num == -2";

export const with_fieldName_in_group = {
  "and": [
    {
      "some": [
        { "var": "results" },
        {
          "==": [
            { "var": "outcome" },
            3
          ]
        }
      ]
    }
  ]
};

export const with_fieldName_in_struct = {
  "and": [
    {
      ">=": [ { "var": "person.age" }, 18 ]
    }, {
      "==": [ { "var": "userName" }, "Denys" ]
    }, {
      "==": [ { "var": "account.id" }, "123" ]
    }
  ]
};

export const spel_with_fieldName_in_group = "results.?[outcome == 3].size() > 0";

// rare
export const with_groupVarKey = {
  "and": [
    {
      "==": [ { "shortcut": "stock" }, true ]
    }, {
      "some": [
        { "varValues": "results" },
        { ">": [ { "var": "score" }, 8 ] }
      ]
    }
  ]
};

export const spel_with_number = "num == 2";
export const spel_with_between = "num >= 1 && num <= 2";
export const spel_with_not_between = "(num < 1 || num > 2)";
export const spel_with_not = "!(num == 2)";
export const spel_with_not_not = "!(num == 2 || !(num == 3))";
export const spel_with_cases = "(str == '222' ? is_string : (num == 4 ? is_number : unknown))";
export const spel_with_cases_simple = "(str == '222' ? foo : bar)";
export const spel_with_cases_vars = "(str == '222' ? str : str2)";
export const spel_with_cases_and_concat = "(str == '222' ? foo : foo + bar)";
export const spel_with_cases_with_negative = "(num > 0 ? num : -1)";
export const spel_with_default_case_field = "str2";
export const spel_with_default_case_func = "str2.toLowerCase()";

export const sql_with_cases = "IF(str = '222', 'is_string', IF(num = 4, 'is_number', 'unknown'))";

export const with_cases = {"if": [
  {"==":[{"var":"str"},"222"]},
  "is_string",
  {"if": [
    {"==":[{"var":"num"},4]},
    "is_number",
    "unknown"
  ]}
]};

export const with_cases_simple = {
  "if": [
    {"==": [{"var": "str"}, "222"]},
    "foo",
    "bar"
  ]
};

export const with_cases_vars = {
  "if": [
    {"==": [{"var": "str"}, "222"]},
    {"var": "str"},
    {"var": "str2"}
  ]
};

export const with_cases_with_negative = {
  "if": [
    {">":[{"var":"num"},0]},
    {"var":"num"},
    -1
  ]
};

export const with_default_case_field = {
  "var": "str2"
};

export const with_default_case_func = {
  "toLowerCase": [
    { "var": "str2" }
  ]
};

export const sql_with_lhs_toLowerCase = "LOWER(str) LIKE 'aaa%'";

export const spel_with_lhs_toLowerCase = "str.toLowerCase().startsWith('aaa')";
export const spel_with_lhs_toLowerCase_toUpperCase = "str.toLowerCase().toUpperCase() == str.toUpperCase()";
//export const spel_with_new_Date = "datetime == new java.util.Date()";
//export const spel_with_SimpleDateFormat = "datetime == new java.text.SimpleDateFormat('yyyy-MM-dd').parse('2022-01-15')";
export const spel_with_LocalTime = "time == T(java.time.LocalTime).parse('02:03:00')";
export const spel_with_new_String = "str == new String('hello world').toUpperCase()";
export const spel_with_datetime_compareTo = "datetime.compareTo(T(java.time.LocalDateTime).now().plusDays(6)) < 0";
export const spel_with_date_compareTo = "date.compareTo(T(java.time.LocalDate).now().plusDays(6)) < 0";
export const spel_with_datetime_compareTo_parse = "datetime.compareTo(T(java.time.LocalDateTime).parse('2005-11-12 11:11:12', T(java.time.format.DateTimeFormatter).ofPattern('yyyy-MM-dd HH:mm:ss'))) == 0";
export const spel_with_datetime_compareTo_parse_plusDays = "datetime.compareTo(T(java.time.LocalDateTime).parse('2023-01-01 00:00:00', T(java.time.format.DateTimeFormatter).ofPattern('yyyy-MM-dd HH:mm:ss')).plusDays(7)) > 0";

export const spel_with_date_funcs_in_lhs_and_rhs = "(T(java.time.LocalDate).now().compareTo(T(java.time.LocalDate).now().plusDays(1)) == 0 && T(java.time.LocalDateTime).now().compareTo(T(java.time.LocalDateTime).now().plusDays(2)) == 0)";
export const spel_with_now_funcs_in_lhs_and_rhs = "(T(java.time.LocalDate).now().compareTo(T(java.time.LocalDate).now()) == 0 && T(java.time.LocalDateTime).now().compareTo(T(java.time.LocalDateTime).now()) == 0)";
export const spel_with_date_func_in_lhs_and_value_in_rhs = "T(java.time.LocalDate).now().plusDays(1).compareTo(T(java.time.LocalDate).parse('2025-05-01', T(java.time.format.DateTimeFormatter).ofPattern('yyyy-MM-dd'))) == 0";
export const spel_with_datetime_func_in_lhs_and_value_in_rhs = "T(java.time.LocalDateTime).now().plusDays(2).compareTo(T(java.time.LocalDateTime).parse('2025-05-01 10:04:06', T(java.time.format.DateTimeFormatter).ofPattern('yyyy-MM-dd HH:mm:ss'))) == 0";
export const spel_with_field_in_lhs_and_date_func_in_rhs = "(date.compareTo(T(java.time.LocalDate).now().plusDays(1)) == 0 && datetime.compareTo(T(java.time.LocalDateTime).now().plusDays(2)) == 0)";
export const spel_with_field_in_lhs_and_date_func_in_rhs_2 = "(date.compareTo(date.plusDays(3)) == 0 && datetime.compareTo(datetime.plusDays(4)) == 0)";
export const spel_with_start_of_today_in_rhs = "datetime.compareTo(T(java.time.LocalDateTime).now().truncatedTo(T(java.time.temporal.ChronoUnit).DAYS)) > 0";

export const sql_with_date_funcs_in_lhs_and_rhs = "(CURDATE() = DATE_ADD(CURDATE(), INTERVAL 1 day) AND NOW() = DATE_ADD(NOW(), INTERVAL 2 day))";
export const sql_with_now_funcs_in_lhs_and_rhs = "(CURDATE() = CURDATE() AND NOW() = NOW())";
export const sql_with_date_func_in_lhs_and_value_in_rhs = "DATE_ADD(CURDATE(), INTERVAL 1 day) = '2025-05-01'";
export const sql_with_datetime_func_in_lhs_and_value_in_rhs = "DATE_ADD(NOW(), INTERVAL 2 day) = '2025-05-01 10:04:06.000'";
export const sql_with_field_in_lhs_and_date_func_in_rhs = "(date = DATE_ADD(CURDATE(), INTERVAL 1 day) AND datetime = DATE_ADD(NOW(), INTERVAL 2 day))";
export const sql_with_field_in_lhs_and_date_func_in_rhs_2 = "(date = DATE_ADD(date, INTERVAL 3 day) AND datetime = DATE_ADD(datetime, INTERVAL 4 day))";
export const sql_with_start_of_today_in_rhs = "datetime > DATE_FORMAT(NOW(), '%Y-%m-%d 00:00:00')";

export const jl_with_date_funcs_in_lhs_and_rhs = {
  "and": [
    {
      "date==": [
        { "today": [] },
        { "date_add": [ { "today": [] }, 1, "day" ] }
      ]
    },
    {
      "datetime==": [
        { "now": [] },
        { "datetime_add": [ { "now": [] }, 2, "day" ] }
      ]
    }
  ]
};

export const jl_with_now_funcs_in_lhs_and_rhs = {
  "and": [
    {
      "date==": [
        { "today": [] },
        { "today": [] },
      ]
    },
    {
      "datetime==": [
        { "now": [] },
        { "now": [] },
      ]
    }
  ]
};

export const jl_with_date_func_in_lhs_and_value_in_rhs = {
  "and": [
    {
      "date==": [
        { "date_add": [
          { "today": [] },
          1,
          "day"
        ] },
        "2025-05-01T00:00:00.000Z"
      ]
    }
  ]
};

export const jl_with_datetime_func_in_lhs_and_value_in_rhs = {
  "and": [
    {
      "datetime==": [
        { "datetime_add": [
          { "now": [] },
          2,
          "day"
        ] },
        "2025-05-01T10:04:06.000Z"
      ]
    }
  ]
};

export const jl_with_field_in_lhs_and_date_func_in_rhs = {
  "and": [
    {
      "date==": [
        { "var": "date" },
        { "date_add": [ { "today": [] }, 1, "day" ] }
      ]
    },
    {
      "datetime==": [
        { "var": "datetime" },
        { "datetime_add": [ { "now": [] }, 2, "day" ] }
      ]
    },
  ]
};

export const jl_with_field_in_lhs_and_date_func_in_rhs_2 = {
  "and": [
    {
      "date==": [
        { "var": "date" },
        { "date_add": [ { "var": "date" }, 3, "day" ] }
      ]
    },
    {
      "datetime==": [
        { "var": "datetime" },
        { "datetime_add": [ { "var": "datetime" }, 4, "day" ] }
      ]
    },
  ]
};

export const jl_with_start_of_today_in_rhs = {
  "and": [
    {
      ">": [
        { "var": "datetime" },
        { "start_of_today": [] }
      ]
    }
  ]
};

export const spel_with_lhs_toLowerCase2 = "str.toLowerCase2() == 'aaa'";
export const tree_with_lhs_toLowerCase2 = {
  "type": "group",
  "children1": [
    {
      "type": "rule",
      "properties": {
        //"fieldSrc": "func", //should be determined
        "field": {
          "func": "custom.LOWER2",
          "args": {
            "str": {
              "valueSrc": "field",
              "value": "str"
            }
          }
        },
        "operator": "equal",
        "value": [
          "aaa"
        ],
        "valueSrc": [
          "value"
        ]
      }
    }
  ],
  "properties": {
    "conjunction": "AND",
    "not": false
  }
};

export const with_dot_in_field = {
  "and": [
    { "==": [ { "var": "number.one" }, 11 ] },
  ]
};

export const spel_with_dot_in_field = "number.one == 11";

export const tree_with_case__with_invalid_rules__without_default_case = {
  type: "switch_group",
  children1: [
    {
      type: "case_group",
      properties: {
        value: ["aa"],
        valueType: ["case_value"],
        valueSrc: ["value"],
      },
      children1: [{
        type: "rule",
        properties: {
          field: "evenNum",
          operator: "equal",
          value: [7]
        }
      }]
    },
  ]
};

export const tree_with_case__without_case_value__without_default_case = {
  type: "switch_group",
  children1: [
    {
      type: "case_group",
      children1: [{
        type: "rule",
        properties: {
          field: "evenNum",
          operator: "equal",
          value: [6]
        }
      }]
    },
  ]
};

export const tree_with_empty_cases = {
  type: "switch_group",
  children1: [
    {
      type: "case_group",
      children1: []
    },
    {
      type: "case_group",
    },
  ]
};

export const with_html_injections = {
  "and": [{
    "==": [
      { "var": "num" }, "",
    ],
  }, {
    "==": [
      { "var": "color" },
      "yellow",
    ],
  }, {
    "all": [
      { "var": "multicolor" },
      { "in": [
        { "var": "" },
        [ "yellow" ]
      ] }
    ]
  }, {
    "==": [
      { "var": "selecttree" },
      "8",
    ],
  }, {
    "all": [
      { "var": "multiselecttree" },
      { "in": [
        { "var": "" },
        [ "8", "7" ]
      ] }
    ]
  }]
};


export const tree_with_html_injections = {
  "type": "group",
  "children1": [
    {
      "type": "rule",
      "properties": {
        "field": "prox1",
        "operator": "proximity",
        "value": [
          "",
          "<img src=0 onerror=alert('xss@proximity_value')>",
        ],
        // "operatorOptions": {
        //   "proximity": 3
        // }
      }
    },
    {
      "type": "rule",
      "properties": {
        "field": "str",
        "operator": "equal",
        "value": [
          "<img src=0 onerror=alert('xss@string_value')>",
        ],
      }
    }
  ]
};
