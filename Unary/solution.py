import re

message = input()

answer = ""
binnary = ""
for letter in [*message]:
    binnary += format(ord(letter), '07b')

matches = re.findall(r"1+|0+", binnary)
idx = 0
for match in enumerate(matches, start=1):
    idx += 1
    m = match[1]
    if m[:1] == "0":
        answer += "00 "
    else:
        answer += "0 "

    for i in range(len(m)):
        answer += "0"

    if idx < len(matches):
        answer += " "

# To debug: print("Debug messages...", file=sys.stderr, flush=True)

print(answer)
