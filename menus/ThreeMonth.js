import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ThreeMonth = () => {
  const navigation = useNavigation();
  const [visibility, setVisibility] = useState({
    week1: {
      visible: false,
      day1: false,
      day2: false,
      day3: false,
      day4: false,
      day5: false,
      day6: false,
      day7: false,
    },
    week2: {
      visible: false,
      day8: false,
      day9: false,
      day10: false,
      day11: false,
      day12: false,
      day13: false,
      day14: false,
    },
    week3: {
      visible: false,
      day15: false,
      day16: false,
      day17: false,
      day18: false,
      day19: false,
      day20: false,
      day21: false,
    },
    week4: {
      visible: false,
      day22: false,
      day23: false,
      day24: false,
      day25: false,
      day26: false,
      day27: false,
      day28: false,
    },
    // Add visibility state for other weeks
  });

  const handleReturn = () => {
    navigation.goBack();
  };

  const toggleWeekVisibility = (week) => {
    setVisibility((prevState) => ({
      ...prevState,
      [week]: {
        ...prevState[week],
        visible: !prevState[week].visible,
      },
    }));
  };

  const toggleDayVisibility = (week, day) => {
    setVisibility((prevState) => ({
      ...prevState,
      [week]: {
        ...prevState[week],
        [day]: !prevState[week][day],
      },
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>3 Month Nutrition Menu</Text>
      <ScrollView style={styles.scrollView}>
        {Object.entries(visibility).map(([week, { visible, ...days }]) => (
          <View key={week} style={styles.weekContainer}>
            <TouchableOpacity onPress={() => toggleWeekVisibility(week)}>
              <Text style={styles.weekTitle}>Week {week.substring(4)}:</Text>
            </TouchableOpacity>
            {visible && (
              <>
                {Object.entries(days).map(([day, dayVisible]) => (
                  <TouchableOpacity
                    key={day}
                    onPress={() => toggleDayVisibility(week, day)}
                  >
                    <View style={styles.dayContainer}>
                      <Text style={styles.dayTitle}>
                        Day {day.substring(3)}:
                      </Text>
                      {dayVisible && (
                        <View style={styles.mealContainer}>
                          {dayVisible && (
                            <>
                              {day === "day1" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Shakshuka with Whole Wheat Pita (350
                                    calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    - 2 large eggs (140 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup canned diced tomatoes (20
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup bell peppers, chopped (10
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup onion, chopped (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon olive oil (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 teaspoon paprika (3 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 teaspoon cumin (4 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 teaspoon garlic powder (5 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 teaspoon chili powder (4 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 teaspoon salt (0 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 teaspoon black pepper (0 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 whole wheat pita (100 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Mediterranean Falafel Wrap (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 falafel patties (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 whole wheat wrap (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup hummus (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup tabbouleh salad (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup cucumber slices (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens (15 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Grilled Lemon Herb Chicken with Roasted
                                    Vegetables (430 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz chicken breast (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon olive oil (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon lemon juice (5 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 teaspoon fresh rosemary (1 calorie)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 teaspoon fresh thyme (1 calorie)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 teaspoon fresh parsley (1 calorie)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 teaspoon garlic powder (5 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 teaspoon salt (0 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 teaspoon black pepper (0 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup mixed vegetables (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup quinoa, cooked (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1200
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day2" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Greek Yogurt Parfait (350 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    - 1 cup plain Greek yogurt (130 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup granola (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon honey (60 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Quinoa Salad with Chickpeas (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup canned chickpeas, drained and
                                    rinsed (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced cucumber (5 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced red bell pepper (10
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced red onion (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons chopped fresh parsley (5
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon olive oil (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon lemon juice (5 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Salt and pepper to taste (0 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Vegetable Stir-Fry with Tofu (430 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz firm tofu, cubed (160 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup mixed vegetables (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon soy sauce (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon hoisin sauce (45 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon sesame oil (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon chopped green onions (5
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1200
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day3" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Avocado Toast with Poached Eggs (340
                                    calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    - 2 slices whole grain bread (160 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 avocado, mashed (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 large eggs, poached (140 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Salt and pepper to taste (0 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Quinoa Stuffed Bell Peppers (400 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 large bell peppers (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup black beans (55 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup corn kernels (30 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced tomatoes (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons salsa (20 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons shredded cheese (115
                                    calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Baked Falafel with Hummus (440 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 falafel patties (320 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons hummus (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 whole wheat pita (20 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens salad (0 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1180
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day4" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Greek Yogurt Parfait (330 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    - 1 cup plain Greek yogurt (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup granola (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon honey (30 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Veggie Quinoa Bowl (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup chickpeas (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup roasted vegetables (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced cucumber (5 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced red bell pepper (10
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons tzatziki sauce (90 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Teriyaki Salmon with Steamed Rice (480
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz teriyaki glazed salmon (280 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup steamed white rice (200 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Steamed broccoli on the side (0 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1230
                                    </Text>
                                  </Text>
                                </>
                              )}

                              {day === "day5" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Oatmeal with Almond Butter and Banana (360
                                    calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    - 1/2 cup rolled oats (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon almond butter (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 small banana, sliced (110 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Falafel Wrap with Tahini Sauce (430
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 falafel patties (160 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 whole wheat wrap (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens (0 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced tomatoes (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons tahini sauce (160 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Grilled Chicken with Quinoa Salad (450
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz grilled chicken breast (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens salad (0 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup sliced almonds (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1240
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day6" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Avocado Toast with Poached Egg (340
                                    calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    - 1 slice whole grain bread (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 avocado, mashed (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 poached egg (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Pinch of salt and pepper for seasoning (0
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Optional: sprinkle of red pepper flakes
                                    (10 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Tofu Stir Fry with Brown Rice (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz firm tofu, cubed (180 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup mixed stir-fry vegetables (40
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon low-sodium soy sauce (20
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 teaspoon sesame oil (80 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Lentil Soup with Whole Wheat Bread (450
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup lentil soup (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole wheat bread (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Side salad with lemon vinaigrette (110
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1210
                                    </Text>
                                  </Text>
                                </>
                              )}

                              {day === "day7" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Smoothie Bowl with Fruit and Nuts (350
                                    calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    - 1 frozen banana (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup almond milk (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon almond butter (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Toppings: sliced almonds, shredded
                                    coconut, chia seeds (90 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Chickpea Salad Wrap (430 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup canned chickpeas, drained and
                                    rinsed (130 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 whole wheat wrap (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens (0 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced cucumber (5 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons hummus (100 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Baked Portobello Mushrooms with Quinoa (460
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 large portobello mushrooms, stems
                                    removed (80 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Side of roasted vegetables (270 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Drizzle of balsamic glaze (0 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1240
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day8" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Oatmeal with Fresh Fruit (380 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup rolled oats (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup almond milk (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 banana, sliced (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup blueberries (20 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon honey (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Quinoa Salad with Chickpeas (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup chickpeas, drained and rinsed (130
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced cucumber (8 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced bell peppers (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons olive oil and lemon dressing
                                    (80 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Grilled Portobello Mushrooms (360 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 large portobello mushrooms, stemmed (60
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon balsamic vinegar (15
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon olive oil (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 teaspoon minced garlic (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Fresh herbs for garnish (optional, 5
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1190
                                  </Text>
                                </>
                              )}

                              {day === "day9" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Yogurt Parfait (300 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup Greek yogurt (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup granola (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup mixed berries (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Vegetable Stir-Fry with Tofu (430 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup mixed vegetables (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 3 oz tofu, cubed (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon soy sauce (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon sesame oil (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup cooked brown rice (125 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Lentil Soup with Whole Wheat Bread (390
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup lentil soup (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole wheat bread (140 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1120
                                  </Text>
                                </>
                              )}
                              {day === "day10" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Avocado Toast with Poached Egg (380
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole grain bread (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 ripe avocado (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 large egg, poached (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Salt, pepper, and chili flakes to taste
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Quinoa and Black Bean Salad (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup black beans, drained and rinsed
                                    (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced bell pepper (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced red onion (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons lime juice (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Fresh cilantro for garnish
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Baked Tilapia with Roasted Vegetables (380
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz tilapia fillet (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup mixed vegetables (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon olive oil (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Salt, pepper, and herbs for seasoning
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1210
                                  </Text>
                                </>
                              )}

                              {day === "day11" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Greek Yogurt with Honey and Almonds (350
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup Greek yogurt (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon honey (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon sliced almonds (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Veggie Wrap with Hummus (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 whole wheat tortilla (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons hummus (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup shredded lettuce (5 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup sliced cucumber (4 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup shredded carrots (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup sliced bell peppers (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Lentil and Vegetable Stew (430 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup lentils, cooked (230 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup mixed vegetables (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup vegetable broth (20 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Salt, pepper, and herbs for seasoning
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1200
                                  </Text>
                                </>
                              )}
                              {day === "day12" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Oatmeal with Berries and Almond Butter (350
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup rolled oats (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup unsweetened almond milk (30
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon almond butter (140 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Quinoa Salad with Chickpeas and Avocado (450
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup chickpeas, drained and rinsed (120
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 avocado, sliced (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Lemon-tahini dressing (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Baked Chicken with Sweet Potatoes and Green
                                    Beans (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz chicken breast, baked (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 medium sweet potato, roasted (100
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup green beans, steamed (30 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Olive oil, garlic, and herbs for seasoning
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1220
                                  </Text>
                                </>
                              )}

                              {day === "day13" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Greek Yogurt Parfait with Granola and Honey
                                    (380 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup Greek yogurt (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup granola (130 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon honey (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Fresh berries for topping (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Falafel Wrap with Hummus and Salad (420
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 falafel patties (200 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 whole wheat tortilla (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons hummus (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens and sliced tomatoes (50
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Lentil Soup with Whole Wheat Bread (400
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup lentil soup (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole wheat bread (80 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Side salad with vinaigrette (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1200
                                  </Text>
                                </>
                              )}
                              {day === "day14" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Whole Grain Pancakes with Fruit Compote (380
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 whole grain pancakes (200 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup fruit compote (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon maple syrup (80 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Veggie Stir-Fry with Tofu (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz tofu, cubed (160 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed vegetables (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Stir-fry sauce (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Lentil Stuffed Bell Peppers (430 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 bell peppers, halved and stuffed with
                                    lentils (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Side salad with vinaigrette (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Fresh fruit for dessert (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1260
                                  </Text>
                                </>
                              )}

                              {day === "day15" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Avocado Toast with Poached Egg (360
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole grain bread (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 avocado, mashed (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 poached egg (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens (20 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Quinoa Salad with Roasted Vegetables (420
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Assorted roasted vegetables (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons balsamic vinaigrette (80
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Baked Falafel with Greek Salad (430
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 baked falafel patties (220 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens, tomatoes, cucumbers, olives
                                    (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Lemon-tahini dressing (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1210
                                  </Text>
                                </>
                              )}

                              {day === "day16" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Chia Seed Pudding with Fresh Fruit (340
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup chia seeds (180 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup unsweetened almond milk (30
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Fresh fruit topping (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Optional: drizzle of honey (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Black Bean and Corn Salad (390 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup black beans, cooked (220 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup corn kernels (80 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Diced bell peppers, onions, cilantro (50
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Lime juice and olive oil dressing (40
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Stuffed Portobello Mushrooms (460 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 portobello mushroom caps, stuffed with
                                    quinoa and vegetables (320 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Side of steamed asparagus (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Balsamic glaze drizzle (80 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1190
                                  </Text>
                                </>
                              )}
                              {day === "day17" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Oatmeal with sliced bananas and almonds (350
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup rolled oats (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup almond milk (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 medium banana, sliced (105 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon sliced almonds (80 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Chickpea salad with tahini dressing (400
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup chickpeas, drained and rinsed (270
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced tomatoes (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced cucumbers (5 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon tahini dressing (100
                                    calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Baked tilapia with quinoa and roasted
                                    vegetables (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz tilapia fillet (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup mixed roasted vegetables (220
                                    calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1200
                                  </Text>
                                </>
                              )}

                              {day === "day18" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Greek yogurt parfait with berries and
                                    granola (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup plain Greek yogurt (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup granola (160 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Quinoa and black bean salad with avocado
                                    (400 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup black beans, drained and rinsed
                                    (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 avocado, sliced (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Balsamic vinaigrette (55 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Stuffed bell peppers with quinoa and
                                    vegetables (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 bell peppers, halved and seeded (30
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup diced tomatoes (20 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup chopped onions (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced zucchini (5 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced mushrooms (5 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1200
                                  </Text>
                                </>
                              )}

                              {day === "day19" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Whole wheat pancakes with maple syrup and
                                    fruit (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 whole wheat pancakes (220 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons maple syrup (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (30 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Lentil soup with whole wheat bread (400
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup lentil soup (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole wheat bread (150 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Vegetable stir-fry with tofu and brown rice
                                    (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz tofu, cubed (160 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup mixed vegetables (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon soy sauce (20 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1200
                                  </Text>
                                </>
                              )}
                              {day === "day20" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Avocado toast with poached eggs (350
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 slices whole grain bread (160 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 avocado, mashed (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 poached eggs (140 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Salt and pepper to taste
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Quinoa salad with roasted vegetables and
                                    lemon tahini dressing (400 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed roasted vegetables (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons lemon tahini dressing (140
                                    calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Baked tofu with steamed broccoli and brown
                                    rice (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz tofu, baked (160 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup steamed broccoli (30 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Soy sauce for seasoning
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1200
                                  </Text>
                                </>
                              )}

                              {day === "day21" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Smoothie bowl with mixed berries and almond
                                    butter (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup frozen mixed berries (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 banana (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup almond milk (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon almond butter (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Toppings: sliced almonds, chia seeds,
                                    shredded coconut
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Chickpea and vegetable stir-fry with brown
                                    rice (400 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked chickpeas (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed vegetables (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon soy sauce (20 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Lentil curry with spinach and quinoa (450
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked lentils (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup spinach, cooked (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Curry seasoning
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1200
                                  </Text>
                                </>
                              )}

                              {day === "day22" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Whole grain waffles with maple syrup and
                                    fruit (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 whole grain waffles (200 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons maple syrup (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (50 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Spinach salad with grilled portobello
                                    mushrooms and balsamic glaze (400 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 grilled portobello mushroom (20
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup cherry tomatoes (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup sliced cucumbers (5 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Balsamic glaze (50 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Vegetable stir-fry with tofu and quinoa (450
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz tofu, cubed (160 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed vegetables (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Soy sauce for seasoning
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1200
                                  </Text>
                                </>
                              )}
                              {day === "day23" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Oatmeal with almond milk, sliced bananas,
                                    and honey (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup rolled oats (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup almond milk (30 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 banana, sliced (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon honey (70 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Quinoa and black bean salad with avocado
                                    dressing (400 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup black beans (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 avocado, sliced (80 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Lime juice for dressing
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Vegetable curry with basmati rice (450
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed vegetables (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked basmati rice (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Curry sauce (290 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1200
                                  </Text>
                                </>
                              )}

                              {day === "day24" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Greek yogurt with granola and mixed berries
                                    (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup Greek yogurt (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup granola (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (80 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Stuffed bell peppers with quinoa and
                                    vegetables (400 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 bell peppers (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed vegetables (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Tomato sauce for stuffing (180 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Baked sweet potato with black beans and
                                    salsa (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 medium sweet potato, baked (150
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup black beans (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Salsa for topping (50 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1200
                                  </Text>
                                </>
                              )}

                              {day === "day25" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Scrambled tofu with sautéed vegetables (350
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz tofu, scrambled (160 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed vegetables (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole grain toast (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 teaspoon olive oil (40 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Lentil soup with whole grain crackers (400
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup lentil soup (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 whole grain crackers (150 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Quinoa stuffed zucchini boats with marinara
                                    sauce (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 medium zucchinis (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Marinara sauce for topping (290 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1200
                                  </Text>
                                </>
                              )}
                              {day === "day26" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Smoothie bowl with mixed berries and almond
                                    butter (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 frozen banana (105 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon almond butter (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup almond milk (25 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Toppings: granola, sliced almonds,
                                    shredded coconut
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Quinoa salad with roasted vegetables and
                                    tahini dressing (400 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Roasted vegetables (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon tahini dressing (140
                                    calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Lentil stew with sweet potatoes and kale
                                    (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup lentil stew (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 small sweet potato, roasted (150
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Steamed kale (50 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1200
                                  </Text>
                                </>
                              )}

                              {day === "day27" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Avocado toast with cherry tomatoes and
                                    microgreens (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 slices whole grain toast (180 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 avocado, mashed (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cherry tomatoes, sliced (25
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Microgreens for topping
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Chickpea salad with cucumber, red onion, and
                                    lemon vinaigrette (400 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup chickpeas (240 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cucumber, diced (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 red onion, thinly sliced (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Lemon vinaigrette for dressing (60
                                    calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Baked tofu with stir-fried vegetables and
                                    brown rice (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz baked tofu (180 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Stir-fried vegetables (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (170 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1200
                                  </Text>
                                </>
                              )}

                              {day === "day28" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Whole grain pancakes with maple syrup and
                                    fresh fruit (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 whole grain pancakes (200 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons maple syrup (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed berries for topping (50 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Mediterranean chickpea wrap with hummus and
                                    veggies (400 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 whole wheat wrap (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup chickpeas (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed vegetables (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons hummus (80 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Vegetable stir-fry with tofu and brown rice
                                    (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz tofu (160 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Stir-fried vegetables (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (170 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories:
                                    </Text>{" "}
                                    1200
                                  </Text>
                                </>
                              )}
                            </>
                          )}
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </>
            )}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={handleReturn}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>GO BACK</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#355C7D",
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#C06C84",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
  },
  weekContainer: {
    marginBottom: 16,
  },
  weekTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#FFFFFF",
  },
  dayContainer: {
    marginBottom: 8,
  },
  dayTitle: {
    fontSize: 20, // Increased font size for day titles
    fontWeight: "bold",
    marginBottom: 8,
    color: "#FFFFFF",
  },
  mealContainer: {
    marginBottom: 8,
  },
  mealText: {
    fontSize: 20, // Increased font size for meal text
  },
  mealText: {
    fontSize: 20, // Increased font size for meal text
  },

  mealCategory: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#FFFFFF",
  },
});

export default ThreeMonth;
