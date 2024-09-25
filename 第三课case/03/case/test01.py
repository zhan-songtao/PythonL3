import cv2

# 读取图片
img = cv2.imread('images/qiuqiu.png')
# 转换成灰度图像
img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
# 显示图像
cv2.imshow("image", img)
# 设置图像显示时长
cv2.waitKey(0)
# 关闭窗口
cv2.destroyAllWindows()
