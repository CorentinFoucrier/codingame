package main

import "fmt"
import "os"
import "bufio"
import "strings"
import "sort"

func main() {
    scanner := bufio.NewScanner(os.Stdin)
    scanner.Buffer(make([]byte, 1000000), 1000000)

    var L int
    scanner.Scan()
    fmt.Sscan(scanner.Text(),&L)
    
    var H int
    scanner.Scan()
    fmt.Sscan(scanner.Text(),&H)
    scanner.Scan()

    T := strings.ToUpper(scanner.Text())
    OUTPUT := make([]string, H)
    ABC := strings.Split("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "")
    for i := 0; i < H; i++ {
        scanner.Scan()
        ROW := scanner.Text()
        for j := 0; j < len(T); j++ {
            letters := strings.Split(T, "")
            letterI := sort.StringSlice(ABC).Search(letters[j]) + 1
            var isInArrayOfLetters bool = false
            for _, v := range ABC {
                if v == letters[j] {
                    isInArrayOfLetters = true
                    break
                }
            }
            if isInArrayOfLetters {
                OUTPUT[i] += string(ROW[letterI*L-L:letterI*L])
            } else {
                OUTPUT[i] += string(ROW[27*L-L:27*L])
            }
        }

        fmt.Println(OUTPUT[i])
    }
}
