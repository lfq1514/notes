## python是如何管理三方包的
python是通过pip来管理三方包的，类比javascript的npm，通过pip install来安装【python3的话是pip3 install】

## python创建，激活虚拟环境
python运行时，最好先创建虚拟环境，虚拟环境时一个隔离的环境，不会受全局的影响，venv是python自带的虚拟环境管理，以下时创建并激活虚拟环境命令
1. 创建虚拟环境

```
python3 -m venv venv
```

2.  激活虚拟环境
```
source venv/bin/activate
```
3. 退出虚拟环境
```
deactivate
```
## pipenv更智能的，更好用的python依赖管理工具
pipenv 是 Python 官方推荐的依赖管理工具，结合了 pip 和 virtualenv 的功能，通过 Pipfile 和 Pipfile.lock 文件管理项目依赖。

1. 安装pipenv
```
pip install pipenv  # 全局安装
```
### pipenv命令

场景	命令
安装生产依赖	pipenv install requests
安装开发依赖	pipenv install --dev pytest
指定版本	pipenv install numpy==1.24.0
从 Pipfile 安装所有依赖	pipenv install (或 pipenv sync)

### pipenv初始化项目

```
pipenv install
```
说明：初始化项目的项目，执行pipenv install后，会自动创建虚拟环境和 生成Pipfile文件，如果已经有了虚拟环境则只会复用这个虚拟环境，不会创建新的虚拟环境，同时也不会生成新的pipfile文件


### pipenv虚拟环境操作
进入虚拟环境Shell	pipenv shell
退出虚拟环境	exit 或 Ctrl+D
不进入环境直接运行命令	pipenv run python app.py
查看虚拟环境路径	pipenv --venv
删除虚拟环境	pipenv --rm


### pipenv 查看已经安装的依赖
```
pipenv graph  # 树形展示依赖关系
```
### pipenv更新依赖,卸载依赖

```
pipenv update requests  # 更新指定包
pipenv update          # 更新所有包
pipenv uninstall requests
```

pipenv 默认通过pipfile文件来记录依赖，类似于package.json

如果需要生成requirements.txt，需要执行命令
```
pipenv requirements > requirements.txt          # 生成生产环境依赖
pipenv requirements --dev > requirements.txt   # 包含开发依赖
```

### 为什么 pipenv 不直接生成 requirements.txt？
设计目标：pipenv 用 Pipfile + Pipfile.lock 替代 requirements.txt，提供更结构化的依赖管理（支持环境分离、版本范围等）。

兼容性：如果需要与其他工具（如 Docker、CI/CD）交互，可按需导出 requirements.txt。

#### 关键区别：Pipfile vs requirements.txt
特性	    Pipfile	                requirements.txt
文件格式	TOML（结构化，易读）	纯文本（每行一个包）
版本控制	支持灵活版本范围（~=, *）	通常固定版本（==1.2.3）
环境分离	明确区分 [packages] 和 [dev-packages]	需手动拆分为多个文件
锁定机制	自动生成 Pipfile.lock	需手动 pip freeze

### pipenv 如何确定已进入当前虚拟环境
```
which pythpn3 如果结果是全局的环境则没进入，如果是虚拟环境的路径，则进入了

```

### 如何运行python脚本

1. 直接使用 pipenv run（推荐）
```
pipenv run python app.py         # 运行Python脚本
pipenv run pytest tests/         # 运行测试
pipenv run pip list              # 查看虚拟环境中的包
```
2. 通过 pipenv scripts 定义快捷命令

```
[scripts]
start = "python app.py"
test = "pytest tests/"
```
