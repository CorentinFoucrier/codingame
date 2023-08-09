using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Text.RegularExpressions;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class Solution
{
    static void Main(string[] args)
    {
        string streamOfConsciousness = Console.ReadLine();
        int bustThreshold = int.Parse(Console.ReadLine());

        // Représentation d'un packet de 52 cartes et leur valeurs
        Dictionary<string, int> deck = new Dictionary<string, int>(); // ["10": 0]
        string cards = "AKQJT98765432";
        foreach (char card in cards) {
            deck.Add(card.ToString(), 4);
        }

        // Nettoyer le "streamOfConsciousness" et mettre de côté les suites de cartes valides.
        string[] thoughts = streamOfConsciousness.Split(".");
        foreach (string thought in thoughts) {
            Match m = Regex.Match(thought, @"[AKQJT98765432]+");
            if (m.Value.Length == thought.Length) {
                // Console.Error.WriteLine(m.Value);
                foreach (char c in thought) {
                    deck[c.ToString()]--;
                }
            }
        }

        double cardUnderBustThreshold = 0;
        double totalOfCardLeft = 0;
        foreach (KeyValuePair<string, int> kvp in deck) {
            int vToCompare = 0;
            string[] ten = {"K", "Q", "J", "T"};
            if (ten.Contains(kvp.Key)) {
                vToCompare = 10;
            } else if (kvp.Key == "A") {
                vToCompare = 1;
            } else {
                vToCompare = int.Parse(kvp.Key);
            }
            if (vToCompare < bustThreshold) {
                cardUnderBustThreshold += kvp.Value;
            }
            totalOfCardLeft += kvp.Value;
        }

        Console.Error.WriteLine("cardUnderBustThreshold: " + cardUnderBustThreshold);
        Console.Error.WriteLine("totalOfCardLeft: " + totalOfCardLeft);
        double pourcentageChance = 100.00 * cardUnderBustThreshold / totalOfCardLeft;
        Console.Error.WriteLine(pourcentageChance);

        // Write an answer using Console.WriteLine()
        // To debug: Console.Error.WriteLine("Debug messages...");

        Console.WriteLine(Math.Round(pourcentageChance) + "%");
    }
}