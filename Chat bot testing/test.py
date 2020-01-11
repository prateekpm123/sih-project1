question = ["Which college are you from", "what is your specialization", "Which field are you in",
            "Which year are you in "]

answer1 = [["sakec", "somaiya", "vjti"], ["it", "cs", "sxtc", "exc"], ["1st", "2nd", "3rd", "4th"]]
ans = []
for i in range(3):
    print(question[i])
    print(answer1[i])
    ans1 = input("Select an input from below 1,2,3")
    ans.append(ans1)
print(ans)
