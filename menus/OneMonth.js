import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const OneMonth = () => {
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
      <Text style={styles.title}>1 Month Nutrition Menu</Text>
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
                                    Scrambled Eggs with Spinach(320 calories)
                                  </Text>

                                  <Text style={styles.mealText}>
                                    - 2 large eggs (140 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup spinach (7 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole grain toast (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 teaspoon olive oil (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Grilled chicken salad (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz grilled chicken breast (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cherry tomatoes (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cucumber (8 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon balsamic vinaigrette (60
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Baked salmon with quinoa (460 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz baked salmon (220 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup steamed broccoli (30 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Lemon wedge for flavor (0 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Total Calories: 1200{" "}
                                    </Text>
                                  </Text>
                                </>
                              )}

                              {day === "day2" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Breakfast:{" "}
                                    </Text>
                                    Greek yogurt with berries (280 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup Greek yogurt (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup granola (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Turkey and avocado wrap (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 3 oz turkey breast (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 avocado (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 whole wheat tortilla (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Dinner:{" "}
                                    </Text>{" "}
                                    Stir-fried tofu with vegetables (420
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz tofu (140 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed vegetables (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Stir-fry sauce (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Total Calories: 1050{" "}
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day3" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Breakfast:{" "}
                                    </Text>{" "}
                                    Oatmeal with banana and almond butter (380
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup rolled oats (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 banana (105 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon almond butter (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 teaspoon honey (25 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Lunch:
                                    </Text>{" "}
                                    Lentil soup with whole grain bread (360
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup lentil soup (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole grain bread (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Dinner:{" "}
                                    </Text>{" "}
                                    Grilled shrimp skewers (410 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz shrimp (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 medium sweet potato (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup green beans (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon olive oil (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Total Calories: 1150{" "}
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day4" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Breakfast:{" "}
                                    </Text>{" "}
                                    Whole grain pancakes with yogurt and fruit
                                    (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 whole grain pancakes (200 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup Greek yogurt (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed fruit (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Lunch:
                                    </Text>{" "}
                                    Quinoa salad with black beans (410 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup cooked quinoa (220 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup black beans (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Bell peppers, corn, lime vinaigrette (80
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:{" "}
                                    </Text>{" "}
                                    Beef stir-fry with vegetables (470 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz lean beef (200 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed vegetables (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Stir-fry sauce (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Total Calories: 1230{" "}
                                    </Text>
                                  </Text>
                                </>
                              )}

                              {day === "day5" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Breakfast:{" "}
                                    </Text>{" "}
                                    Scrambled eggs with spinach (320 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 large eggs (140 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup spinach (7 calories)
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
                                    Grilled chicken salad (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz grilled chicken breast (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cherry tomatoes (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cucumber (8 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon balsamic vinaigrette (60
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Dinner:{" "}
                                    </Text>{" "}
                                    Baked salmon with quinoa (460 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz baked salmon (220 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup steamed broccoli (30 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Lemon wedge for flavor (0 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Total Calories: 1200{" "}
                                    </Text>
                                  </Text>
                                </>
                              )}

                              {day === "day6" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Breakfast:{" "}
                                    </Text>{" "}
                                    Greek yogurt with berries (280 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup Greek yogurt (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup granola (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Lunch:{" "}
                                    </Text>
                                    Turkey and avocado wrap (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 3 oz turkey breast (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 avocado (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 whole wheat tortilla (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Stir-fried tofu with vegetables (420
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz tofu (140 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed vegetables (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Stir-fry sauce (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1050
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
                                    Oatmeal with banana and almond butter (380
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup rolled oats (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 banana (105 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon almond butter (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 teaspoon honey (25 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Lunch:
                                    </Text>{" "}
                                    Lentil soup with whole grain bread (360
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup lentil soup (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole grain bread (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Grilled shrimp skewers (410 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz shrimp (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 medium sweet potato (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup green beans (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon olive oil (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1150
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day8" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Breakfast:
                                    </Text>{" "}
                                    Avocado Toast with Poached Eggs (380
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 slices whole grain bread (160 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 ripe avocado (240 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 poached eggs (130 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Salt and pepper to taste
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Quinoa Salad with Chickpeas and Feta (420
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup chickpeas (130 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup crumbled feta cheese (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed greens (10 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Lemon vinaigrette dressing (80 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Dinner:
                                    </Text>{" "}
                                    Grilled Portobello Mushrooms with Roasted
                                    Vegetables (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 large portobello mushrooms (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Assorted roasted vegetables (e.g., bell
                                    peppers, zucchini, carrots) (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon olive oil (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Fresh herbs and garlic for seasoning
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Total Calories: 1250{" "}
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day9" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Breakfast:
                                    </Text>{" "}
                                    Whole Grain Pancakes with Berries and Maple
                                    Syrup (400 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 whole grain pancakes (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons maple syrup (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Optional: 1 tablespoon almond butter (100
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Lunch:
                                    </Text>{" "}
                                    Falafel Pita with Hummus and Salad (450
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 falafel patties (200 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 whole wheat pita bread (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons hummus (80 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed salad greens (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Lemon-tahini dressing (optional, 50
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Dinner:{" "}
                                    </Text>{" "}
                                    Baked Salmon with Quinoa and Steamed
                                    Vegetables (500 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 6 oz baked salmon fillet (300 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Assorted steamed vegetables (e.g.,
                                    broccoli, carrots) (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Fresh lemon juice and herbs for seasoning
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1350
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day10" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Breakfast:{" "}
                                    </Text>{" "}
                                    Greek Yogurt Parfait with Granola and Honey
                                    (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup Greek yogurt (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup granola (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon honey (80 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Optional: Sliced fruits (e.g., berries,
                                    bananas)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Vegetable Stir-Fry with Tofu and Brown Rice
                                    (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz tofu cubes (160 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed vegetables (e.g., bell peppers, snap
                                    peas) (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Stir-fry sauce (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Garnish with sesame seeds and green onions
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Dinner:{" "}
                                    </Text>{" "}
                                    Stuffed Bell Peppers with Quinoa and Black
                                    Beans (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 large bell peppers (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup black beans (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Diced tomatoes, onions, and spices for
                                    stuffing
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1220
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day11" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:{" "}
                                    </Text>{" "}
                                    Scrambled Eggs with Spinach and Whole Wheat
                                    Toast (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 large eggs (140 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup spinach (7 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole wheat toast (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 teaspoon olive oil (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Quinoa Salad with Roasted Vegetables and
                                    Balsamic Vinaigrette (400 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Assorted roasted vegetables (e.g., bell
                                    peppers, zucchini) (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed salad greens (20 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons balsamic vinaigrette (120
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Dinner:{" "}
                                    </Text>{" "}
                                    Baked Chicken with Sweet Potato Mash and
                                    Steamed Broccoli (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 6 oz baked chicken breast (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 medium sweet potato (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup steamed broccoli (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Season with garlic, herbs, and lemon zest
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1200
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day12" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Breakfast:{" "}
                                    </Text>{" "}
                                    Shakshuka with Whole Wheat Bread (380
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 eggs poached in tomato sauce (240
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup diced tomatoes (20 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced bell peppers (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole wheat bread (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Season with spices like paprika and cumin
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Israeli Couscous Salad with Chickpeas and
                                    Lemon-Tahini Dressing (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup cooked Israeli couscous (200
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup chickpeas (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Diced cucumber, cherry tomatoes, and red
                                    onion (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons lemon-tahini dressing (50
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Dinner:{" "}
                                    </Text>{" "}
                                    Grilled Beef Kebabs with Grilled Vegetables
                                    and Herbed Quinoa (480 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz beef cubes marinated in garlic and
                                    herbs (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Assorted grilled vegetables (e.g.,
                                    zucchini, bell peppers) (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa with fresh herbs
                                    (130 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Drizzle with olive oil and lemon juice
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1280
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day13" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Yogurt and Berry Smoothie with Almond Butter
                                    (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup plain Greek yogurt (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon almond butter (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon honey (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Falafel Salad with Tahini Dressing and Pita
                                    Croutons (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 falafel patties (200 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed salad greens (20 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Diced cucumbers, tomatoes, and red onions
                                    (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons tahini dressing (100
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 whole wheat pita, toasted and cut into
                                    croutons (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Lemon Herb Baked Fish with Roasted Potatoes
                                    and Green Beans (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 6 oz white fish fillet (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Roasted baby potatoes with rosemary (120
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Steamed green beans (80 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Season with lemon zest, garlic, and fresh
                                    herbs
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Total Calories: 1220{" "}
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day14" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Whole Grain Toast with Avocado and Poached
                                    Egg (380 calories)
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
                                    - Season with salt, pepper, and red pepper
                                    flakes
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Vegetable Sushi Rolls with Miso Soup (400
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Assorted vegetable sushi rolls (e.g.,
                                    cucumber, avocado) (300 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup miso soup with tofu and seaweed (100
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Garnish with pickled ginger and wasabi
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Dinner:{" "}
                                    </Text>{" "}
                                    Lentil Curry with Brown Rice and Steamed
                                    Broccoli (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup lentil curry (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Steamed broccoli florets (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Serve with naan bread or pita (optional)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1230
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day15" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Breakfast:{" "}
                                    </Text>{" "}
                                    Vegetable Omelette with Whole Wheat Toast
                                    (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 eggs, beaten and filled with sautéed
                                    vegetables (200 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole wheat toast (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Serve with a side of salsa
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Quinoa Salad with Roasted Vegetables and
                                    Lemon-Herb Dressing (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup cooked quinoa (220 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Assorted roasted vegetables (e.g., bell
                                    peppers, zucchini) (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons lemon-herb dressing (50
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Top with crumbled feta cheese (50
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Dinner:{" "}
                                    </Text>{" "}
                                    Baked Chicken Breast with Sweet Potato Mash
                                    and Steamed Asparagus (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 6 oz baked chicken breast (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 medium sweet potato, mashed with a touch
                                    of cinnamon (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Steamed asparagus spears (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Drizzle with olive oil and lemon juice
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Total Calories: 1220{" "}
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day16" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Breakfast:{" "}
                                    </Text>{" "}
                                    Greek Yogurt Parfait with Berries and
                                    Granola (320 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup Greek yogurt (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup granola (160 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Drizzle with honey (optional)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Falafel Wrap with Hummus and Salad (400
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 falafel patties wrapped in whole wheat
                                    pita (300 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons hummus (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed salad greens (20 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Sliced cucumbers, tomatoes, and red onions
                                    (20 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Dinner:
                                    </Text>{" "}
                                    Vegetable Stir-Fry with Tofu and Brown Rice
                                    (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz tofu, stir-fried with mixed
                                    vegetables (180 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Season with soy sauce and sesame oil
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Garnish with chopped green onions
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1140
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day17" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Breakfast:{" "}
                                    </Text>{" "}
                                    Whole Grain Pancakes with Fresh Fruit and
                                    Maple Syrup (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 whole grain pancakes (200 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Assorted fresh fruit (e.g., berries,
                                    banana slices) (80 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Drizzle with maple syrup (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Mediterranean Salad with Grilled Halloumi
                                    and Balsamic Vinaigrette (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed salad greens with cherry tomatoes
                                    and cucumber (30 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 slices grilled halloumi cheese (300
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons balsamic vinaigrette (90
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Garnish with olives and fresh herbs
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Dinner:{" "}
                                    </Text>{" "}
                                    Lentil Soup with Garlic Bread and Steamed
                                    Broccoli (430 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup lentil soup (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole grain garlic bread (120
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Steamed broccoli florets (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Drizzle olive oil over the broccoli
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1200
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day18" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Breakfast:{" "}
                                    </Text>{" "}
                                    Shakshuka with Whole Wheat Bread (380
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 eggs poached in tomato sauce (240
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup diced tomatoes (20 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/4 cup diced bell peppers (15 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 slice whole wheat bread (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Season with spices like paprika and cumin
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Israeli Couscous Salad with Chickpeas and
                                    Lemon-Tahini Dressing (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup cooked Israeli couscous (220
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup chickpeas, drained and rinsed (120
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Diced cucumbers, cherry tomatoes, and red
                                    onions (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons lemon-tahini dressing (30
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Garnish with chopped parsley
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Dinner:{" "}
                                    </Text>{" "}
                                    Grilled Salmon with Roasted Vegetables and
                                    Herbed Quinoa (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz grilled salmon fillet (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Assorted roasted vegetables (e.g.,
                                    carrots, Brussels sprouts) (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa, seasoned with herbs
                                    (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Drizzle with lemon juice
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1250{" "}
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day19" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Yogurt and Berry Smoothie with Almond Butter
                                    (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup plain yogurt (120 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup mixed berries (40 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon almond butter (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 teaspoon honey (25 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Blend with ice until smooth
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Falafel Salad with Tahini Dressing and Pita
                                    Bread (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 falafel patties (200 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed salad greens with cucumber and
                                    tomatoes (30 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons tahini dressing (100
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 whole wheat pita bread (90 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Garnish with parsley and sumac
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Stuffed Bell Peppers with Quinoa and Black
                                    Beans (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Bell peppers stuffed with quinoa, black
                                    beans, and vegetables (300 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Drizzle with enchilada sauce (optional)
                                    (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Serve with a side of steamed broccoli (100
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Total Calories: 1220{" "}
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day20" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Whole Wheat Bagel with Cream Cheese and
                                    Smoked Salmon (380 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 whole wheat bagel (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 tablespoons cream cheese (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 2 oz smoked salmon (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Garnish with capers and red onion slices
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Mediterranean Chickpea Salad with Feta
                                    Cheese and Olives (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup chickpeas, mixed with diced
                                    cucumber, cherry tomatoes, and red onion
                                    (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Crumbled feta cheese (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Kalamata olives (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Drizzle with olive oil and balsamic
                                    vinegar
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Vegetable Stir-Fry with Tofu and Brown Rice
                                    (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 4 oz tofu, stir-fried with mixed
                                    vegetables (180 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked brown rice (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Season with soy sauce and sesame oil
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Garnish with chopped green onions
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1250
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day21" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Banana Nut Oatmeal with Almond Milk (350
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup rolled oats cooked in almond milk
                                    (150 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 banana, sliced (105 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 tablespoon chopped almonds (50 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Drizzle with maple syrup (45 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Lunch:{" "}
                                    </Text>{" "}
                                    Hummus and Veggie Wrap with Mixed Greens
                                    (410 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Whole wheat wrap filled with hummus and
                                    assorted vegetables (300 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed salad greens (20 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Cherry tomatoes and cucumber slices (20
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Dress with lemon juice and olive oil (70
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Dinner:{" "}
                                    </Text>{" "}
                                    Baked Eggplant Parmesan with Whole Wheat
                                    Pasta (460 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Slices of baked eggplant layered with
                                    marinara sauce and mozzarella cheese (350
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup cooked whole wheat pasta (110
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Sprinkle with grated Parmesan cheese and
                                    fresh basil
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      {" "}
                                      Total Calories: 1220{" "}
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day22" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Scrambled Tofu with Spinach and Whole Grain
                                    Toast (340 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup firm tofu, scrambled (120
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1 cup fresh spinach (7 calories)
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
                                    Falafel Pita with Salad (410 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Homemade falafel balls in a whole wheat
                                    pita (300 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Mixed salad greens (20 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Sliced cucumbers and tomatoes (20
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Drizzle with tahini sauce (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Lentil Stew with Quinoa (460 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Hearty lentil stew with carrots and
                                    potatoes (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - 1/2 cup cooked quinoa (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Garnish with fresh parsley
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1210
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day23" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Israeli Shakshuka (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Eggs poached in a spicy tomato and pepper
                                    sauce (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Served with whole wheat pita bread (100
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Quinoa Salad with Chickpeas and Avocado (420
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Quinoa mixed with chickpeas, diced
                                    avocado, and cherry tomatoes (300 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Drizzle with lemon-tahini dressing (120
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Baked Herb-Crusted Salmon with Steamed
                                    Vegetables (480 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Salmon fillet coated in herbs and
                                    breadcrumbs, baked until golden (350
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Assorted steamed vegetables (130 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1250
                                    </Text>
                                  </Text>
                                </>
                              )}

                              {day === "day24" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Whole Grain Pancakes with Mixed Berries (330
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Fluffy whole grain pancakes topped with
                                    mixed berries and a drizzle of honey (250
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Served with a side of Greek yogurt (80
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Mediterranean Chickpea Salad (380 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Chickpeas tossed with cucumbers, tomatoes,
                                    red onions, olives, and feta cheese (300
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Dress with lemon-olive oil vinaigrette (80
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Vegetable Stir-Fry with Tofu and Brown Rice
                                    (460 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Tofu and mixed vegetables stir-fried in a
                                    flavorful sauce, served over brown rice (350
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Garnish with sliced green onions (110
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1170
                                    </Text>
                                  </Text>
                                </>
                              )}

                              {day === "day25" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Greek Yogurt Parfait with Granola and Honey
                                    (320 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Creamy Greek yogurt layered with granola,
                                    fresh berries, and a drizzle of honey (250
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Sprinkle with sliced almonds (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Falafel Bowl with Hummus and Tabbouleh (430
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Crispy falafel served over a bed of
                                    hummus, accompanied by tabbouleh salad (350
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Garnish with a lemon wedge and fresh
                                    parsley (80 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Spaghetti Squash with Marinara Sauce and
                                    Parmesan Cheese (380 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Roasted spaghetti squash tossed with
                                    marinara sauce and grated Parmesan cheese
                                    (300 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Serve with a side of steamed broccoli (80
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1130
                                    </Text>
                                  </Text>
                                </>
                              )}

                              {day === "day26" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Blueberry Almond Butter Smoothie (310
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Blend almond milk, frozen blueberries,
                                    almond butter, and spinach until smooth (250
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Optional: sweeten with a touch of honey
                                    (60 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Falafel Wrap with Tahini Sauce and Pickled
                                    Vegetables (420 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Homemade falafel wrapped in a whole wheat
                                    tortilla with tahini sauce and pickled
                                    vegetables (320 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Side of marinated olives (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Stuffed Bell Peppers with Quinoa and Black
                                    Beans (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Bell peppers filled with a mixture of
                                    quinoa, black beans, corn, and spices (350
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Top with grated cheese and bake until
                                    bubbly (100 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1180
                                    </Text>
                                  </Text>
                                </>
                              )}
                              {day === "day27" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Shakshuka with Feta Cheese and Spinach (380
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Eggs poached in a spicy tomato sauce with
                                    crumbled feta cheese and wilted spinach (300
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Serve with whole grain toast (80 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Falafel Salad with Tahini Dressing (420
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Crispy falafel served over mixed greens,
                                    cucumbers, tomatoes, and red onions, dressed
                                    with tahini sauce (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Garnish with chopped parsley and a squeeze
                                    of lemon (70 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Lemon Herb Roasted Chicken with Roasted
                                    Vegetables (480 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Chicken marinated in lemon, garlic, and
                                    herbs, roasted until golden (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Assorted roasted vegetables (130 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1280
                                    </Text>
                                  </Text>
                                </>
                              )}

                              {day === "day28" && (
                                <>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Breakfast:
                                    </Text>{" "}
                                    Berry Chia Seed Pudding (320 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Chia seeds soaked in almond milk with
                                    mashed berries, topped with sliced almonds
                                    (250 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Sweeten with a touch of maple syrup (70
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Lunch:
                                    </Text>{" "}
                                    Mediterranean Stuffed Peppers with Couscous
                                    (450 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Bell peppers stuffed with a mixture of
                                    couscous, chickpeas, tomatoes, and olives,
                                    baked until tender (350 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Serve with a side of tzatziki sauce (100
                                    calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Dinner:
                                    </Text>{" "}
                                    Lentil Soup with Garlic Bread (410 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Hearty lentil soup flavored with garlic,
                                    carrots, and celery (300 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    - Served with a slice of whole grain garlic
                                    bread (110 calories)
                                  </Text>
                                  <Text style={styles.mealText}>
                                    <Text style={styles.mealCategory}>
                                      Total Calories: 1180
                                    </Text>
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
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007aff",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
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
  },
  dayContainer: {
    marginBottom: 8,
  },
  dayTitle: {
    fontSize: 20, // Increased font size for day titles
    fontWeight: "bold",
    marginBottom: 8,
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
  },
});

export default OneMonth;
