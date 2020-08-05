####  view标签  在超出标签宽度时不隐藏的  奇怪问题 

-  在view中输入纯字符（abcd...）以及数字时，不会自动换行，如果输入有中文字符时，就自动换行了

  ```
  <view class="content">gggggggggggggggggggggggggggggggggggggggggg</view>
  ```

  如果按上面的写，就会出现不换行的问题，不管你怎么调样式都不会换行

  ```
  <view class="content">gggggggg测试gggggggggggggggggggggggggggggggggg</view>
  ```

  如果有其他类型的字符，就能自动换行了

调试的时候发现的问题，做个笔记记录，希望大家不要重复踩坑 ☺

·