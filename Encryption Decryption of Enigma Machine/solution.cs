using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
class Solution
{
    static string caesarShift(string m, int n, bool isEncode = true) {
        byte[] asciiBytes = Encoding.ASCII.GetBytes(m);
        string output = "";
        for (int i = 0; i < asciiBytes.Length; i++) {
            int tmpASC = asciiBytes[i];
            if (tmpASC >= 65 && tmpASC <= 90) {
                if (isEncode) {
                    tmpASC = tmpASC + n + i;
                } else {
                    tmpASC = tmpASC - n - i;
                }
                while (tmpASC < 65) {
                    tmpASC = tmpASC + 26;
                }
                while (tmpASC > 90) {
                    tmpASC = tmpASC - 26;
                }
                char c = (char) tmpASC;
                output += c.ToString();
            } else {
                char c = (char) tmpASC;
                output += c.ToString();
            }
        }
        return output;
    }

    static string calculateRotor(string rotor, string prev, bool isEncode = true) {
        string ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        string output = "";
        if (isEncode) {
            foreach (char c in prev) {
                int index = ABC.IndexOf(c.ToString());
                output += rotor[index].ToString();
            }
            return output;
        }
        foreach (char c in prev) {
            int index = rotor.IndexOf(c.ToString());
            output += ABC[index].ToString();
        }
        return output;
    }

    static void Main(string[] args)
    {
        string operation = Console.ReadLine();
        int pseudoRandomNumber = int.Parse(Console.ReadLine());
        string[] rotors = {Console.ReadLine(), Console.ReadLine(), Console.ReadLine()};
        string message = Console.ReadLine();

        if (operation == "ENCODE") {
            string cs = caesarShift(message, pseudoRandomNumber);
            string r1 = calculateRotor(rotors[0], cs);
            string r2 = calculateRotor(rotors[1], r1);
            string r3 = calculateRotor(rotors[2], r2);
            Console.WriteLine(r3);
        } else {
            string r3 = calculateRotor(rotors[2], message, false);
            string r2 = calculateRotor(rotors[1], r3, false);
            string r1 = calculateRotor(rotors[0], r2, false);
            string decodedMessage = caesarShift(r1, pseudoRandomNumber, false);
            Console.WriteLine(decodedMessage);
        }
    }
}