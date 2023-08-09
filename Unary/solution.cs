using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Text.RegularExpressions;

class Solution
{
    static void Main(string[] args)
    {
        string MESSAGE = Console.ReadLine();
        Encoding ascii = Encoding.ASCII;
        Byte[] encodedBytes = ascii.GetBytes(MESSAGE);
        String binary = "";
        String result = "";

        foreach (Byte b in encodedBytes)
        {
            Int32 asciiInDec = Convert.ToInt32(b);
            String tempBinary = Convert.ToString(asciiInDec, 2);
            if (tempBinary.Length < 7)
            {
                Int32 diff = 7 - tempBinary.Length;
                binary += new string('0', diff) + tempBinary;
            }
            else if (tempBinary.Length > 7)
            {
                binary += tempBinary.Substring(1);
            }
            else
            {
                binary += tempBinary;
            }
        }

        foreach (Match m in Regex.Matches(binary, @"(1+)|(0+)"))
        {
            String block = m.Value;
            if (block.Substring(0, 1) == "0")
            {
                result += "00";
            }
            else
            {
                result += "0";
            }
            result += " ";
            for (var i = 0; i < block.Length; i++)
            {
                result += "0";
            }
            result += " ";
        }

        Console.WriteLine(result.TrimEnd());
    }
}
