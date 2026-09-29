while(True):
    try:
        record= float(input("please type your ideal record of 400m:"))
    except ValueError:
        print("请输入一个数字！")
        continue

    print("your ideal record:"+str(record)+"\n")

    print("recommend:\n第一个100米："+str(record/4-0.5)+"\n"+"第二个100米："+str(record/4-0.7)+"\n"+"第三个100米:"+str(record/4+0.3)+"\n"+"第四个100米:"+str(record/4+0.9)+"\n")#前程一般来说要更快，后程不可避免的掉速，这只是理想模型，具体要采集数据。
    with open("/home/philip/Desktop/400m-pace-calculator/docs/records.txt",mode="a", encoding="utf8") as file:
        file.write("recommend:\n第一个100米："+str(record/4-0.5)+"\n"+"第二个100米："+str(record/4-0.7)+"\n"+"第三个100米:"+str(record/4+0.3)+"\n"+"第四个100米:"+str(record/4+0.9)+"\n")
    print("继续输入成绩，还是输入q退出？")
    if(input()=='q'):
        break
        
