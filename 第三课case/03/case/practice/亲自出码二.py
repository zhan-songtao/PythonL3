import cv2
import dlib

# 请在下方书写你的代码
# 读取图片
img = cv2.imread('../images/02.png')
# 转换成灰度图像
img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
# 生成人脸检测器
detector = dlib.get_frontal_face_detector()
# 检测人脸
faces = detector(img, 1)
# 显示文字的字体
font = cv2.FONT_HERSHEY_SIMPLEX
# 检测到人脸
if len(faces) != 0:
    # 将检测到的人脸数量写到图像中
    cv2.putText(img, 'faces:' + str(len(faces)), (10, 30), font, 1, (0, 0, 0), 1)
# 没有检测到人脸
else:
    # 添加文字 no face
    cv2.putText(img, 'no face', (10, 30), font, 1, (0, 0, 0), 1)

# 显示图像
cv2.imshow("image", img)
# 设置图像显示时长
cv2.waitKey(0)
# 关闭窗口
cv2.destroyAllWindows()
