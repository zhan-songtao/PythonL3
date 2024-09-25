import cv2
import dlib


# 读取图片
img = cv2.imread('images/qiuqiu.png')
# 转换成灰度图像
gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
# 在下方书写你的代码
# 生成人脸检测器

# 检测人脸

# 显示文字的字体
# font = cv2.FONT_HERSHEY_SIMPLEX
# 检测到人脸


# 没有检测到人脸


# 显示图像
cv2.imshow("image", img)
# 设置图像显示时长
cv2.waitKey(0)
# 关闭窗口
cv2.destroyAllWindows()
