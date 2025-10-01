/**
 * 另一个落地页主题
 */
const CONFIG = {
  PROXIO_WELCOME_COVER_ENABLE: false, //是否显示页面进入的欢迎文字
  PROXIO_WELCOME_TEXT: '欢迎来到此网站，点击任意位置进入', // 欢迎文字，留空则不启用

  // 英雄区块导航
  PROXIO_HERO_ENABLE: true, // 开启英雄区
  PROXIO_HERO_TITLE_1: '以科技赋能健康 · 以平台链接未来', // 英雄区文字
  PROXIO_HERO_TITLE_2: '玖都云——智慧健康全链路解决方案服务商', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  PROXIO_HERO_BUTTON_1_TEXT: '', // 英雄区按钮
  PROXIO_HERO_BUTTON_1_URL:
    'https://docs.tangly1024.com/article/vercel-deploy-notion-next', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github-mark.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
  PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/

  // 文章区块
  PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
  PROXIO_BLOG_TITLE: '作品',
  PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
  PROXIO_BLOG_TEXT_1: '最新动态',

  // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

  PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

  // 特性区块
  PROXIO_FEATURE_ENABLE: true, // 特性区块开关
  PROXIO_FEATURE_TITLE: '为什么选择我们',
  PROXIO_FEATURE_TEXT_1: '平台优势',
  PROXIO_FEATURE_TEXT_2: '全链路生态，双轮驱动，专家资源',

  // 特性1
  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
  PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
  PROXIO_FEATURE_1_TITLE_1: '全链路生态',
  PROXIO_FEATURE_1_TEXT_1:
    '从健康档案 → 医疗服务 → 康复管理 → 电商体系 → 培训教育 → 数据服务',

  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
  PROXIO_FEATURE_2_ICON_IMG_URL: '',
  PROXIO_FEATURE_2_TITLE_1: '双轮驱动',
  PROXIO_FEATURE_2_TEXT_1: '数字化平台 + 实体健康城，线上线下融合',

  PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
  PROXIO_FEATURE_3_ICON_IMG_URL: '',
  PROXIO_FEATURE_3_TITLE_1: '专家资源',
  PROXIO_FEATURE_3_TEXT_1:
    '联合专家团队，科研转化与产业落地并行',

  PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
  PROXIO_FEATURE_BUTTON_URL: 'https://9dyh.com', // 按钮跳转

  // 首页生涯区块
  PROXIO_CAREER_ENABLE: true, // 区块开关
  PROXIO_CAREER_TITLE: '简介',
  PROXIO_CAREER_TEXT: '公司简介',

  // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
  PROXIO_CAREERS: [
    {
      title: 'Freelance Architect',
      bio: '2016-2020',
      text: 'As a freelance architect, I worked on a range of residential and commercial projects, balancing form and function. I collaborated with clients and contractors to transform concepts into reality, ensuring each design was both aesthetically pleasing and structurally sound.'
    },
    {
      title: 'Product Designer at Spotify',
      bio: '2020-2022',
      text: 'At Spotify, I helped shape innovative features for millions of users globally. My focus was on creating seamless music discovery experiences, enhancing user interfaces, and optimizing cross-platform navigation, which led to an improved product flow and increased user satisfaction.'
    },
    {
      title: 'Freelance Product Designer',
      bio: '2022-Now',
      text: 'Now I design user-centric products that align with client visions. As a freelance product designer, I collaborate with startups and established companies, crafting solutions that elevate user experiences and increase engagement across both digital and physical interfaces.'
    }
  ],

  // 首页用户测评区块
  PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
  PROXIO_TESTIMONIALS_TITLE: '用户反馈',
  PROXIO_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  PROXIO_TESTIMONIALS_TEXT_2:
    '数千位站长选择用NotionNext搭建他们的网站,通过帮助手册、交流社群以及技术咨询，大家成功上线了自己的网站',

  // 用户测评处的跳转按钮
  PROXIO_TESTIMONIALS_BUTTON_URL: '/about',
  PROXIO_TESTIMONIALS_BUTTON_TEXT: '联系我',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  PROXIO_TESTIMONIALS_ITEMS: [
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ ',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '很喜欢这个主题，本代码小白用三天台风假期搭建出来了，还根据大佬的教程弄了自定义域名，十分感谢，已请喝咖啡~',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '呜呜呜，经过一个下午的努力，终于把博客部署好啦，非常感谢Tangly1024大佬的框架和教程，这是我有生之年用过的最好用的博客框架┭┮﹏┭┮。从今之后，我就可以在自己的博客里bb啦，( •̀ ω •́ )y ',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '感谢提供这么好的项目哈哈 之前一直不知道怎么部署(别的项目好难好复杂)这个相对非常简单 新手非常友好哦',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享 Blog',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '灰常感谢大佬的博客项目，能将博客和notion结合起来，这一直是我挺期待的博客模式。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: '用好久了，太感谢了',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考验辅导 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
    }
  ],

  //   FAQ 常见问题模块
  PROXIO_FAQ_ENABLE: true, // 常见问题模块开关
  PROXIO_FAQ_TITLE: '常见问题解答',
  PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
  PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
  PROXIO_FAQS: [
    {
      q: 'NotionNext有帮助文档吗？',
      a: 'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署'
    },
    {
      q: '部署后要如何编写文章？',
      a: '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>'
    },
    {
      q: '站点部署失败，更新失败？',
      a: '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助'
    },
    {
      q: '文章没有实时同步？',
      a: '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决'
    }
  ],

  // 关于作者区块
  PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
  PROXIO_ABOUT_TITLE: '公司简介',
  PROXIO_ABOUT_TEXT_1: '浙江玖都健康管理有限公司（玖都云），是一家专注于 **健康管理平台建设与运营、康复医疗服务、医学检验、健康城项目开发、电商与教育培训** 的创新型企业。',
  PROXIO_ABOUT_TEXT_2:
    '我们依托“玖都健康城”实体项目，融合 **数字化平台 + 线下实体**，打造智慧健康生态，服务于 **政府、企业、社区与家庭** 四大场景，致力于成为全国领先的“全生命周期健康管理”平台。
',
  PROXIO_ABOUT_PHOTO_URL: '/avatar.png',
  PROXIO_ABOUT_KEY_1: '项目经验',
  PROXIO_ABOUT_VAL_1: '10年+ 健康管理与医疗服务项目经验',
  PROXIO_ABOUT_KEY_2: '合作伙伴',
  PROXIO_ABOUT_VAL_2: '100+ 医院/社区/企业合作',
  PROXIO_ABOUT_KEY_3: '累计服务人群',
  PROXIO_ABOUT_VAL_3: '50万+ 居民建档与健康服务',
  PROXIO_ABOUT_KEY_4: '平台支撑时长',
  PROXIO_ABOUT_VAL_4: '10000+ 小时系统开发与运营积累',

  PROXIO_ABOUT_BUTTON_URL: '/about',
  PROXIO_ABOUT_BUTTON_TEXT: '关于我们',

  // 横向滚动文字
  PROXIO_BRANDS_ENABLE: true, // 滚动文字
  PROXIO_BRANDS: [
    '全链路生态',
    '双轮驱动',
    '专家资源',
    '政府合作'
  ],

  PROXIO_FOOTER_SLOGAN: '我们通过技术为您创造数字体验。',

  // 页脚三列菜单组
  // 页脚菜单
  PROXIO_FOOTER_LINKS: [
    {
      name: '友情链接',
      menus: [
        {
          title: '玖都健康城官网',
          href: 'https://blog.tangly1024.com'
        },
        {
          title: '关注公众号',
          href: 'https://www.tangly1024.com'
        }
      ]
    },
    {
      name: '开发者',
      menus: [
        { title: 'Github', href: 'https://github.com/tangly1024/NotionNext' },
        {
          title: '开发帮助',
          href: 'https://docs.tangly1024.com/article/how-to-develop-with-notion-next'
        },
        {
          title: '功能反馈',
          href: 'https://github.com/tangly1024/NotionNext/issues/new/choose'
        },
        {
          title: '技术讨论',
          href: 'https://github.com/tangly1024/NotionNext/discussions'
        },
        {
          title: '联系我们',
          href: 'https://blog.tangly1024.com/about'
        }
      ]
    }
  ],

  PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  PROXIO_404_TITLE: '我们似乎找不到您要找的页面。',
  PROXIO_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  PROXIO_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  PROXIO_CTA_ENABLE: true,
  PROXIO_CTA_TITLE: '与我建立联系',
  PROXIO_CTA_TITLE_2: '立刻关注您的健康',
  PROXIO_CTA_DESCRIPTION:
    '访问NotionNext的操作文档，我们提供了详细的教程，帮助你即刻搭建站点',
  PROXIO_CTA_BUTTON: true, // 是否显示按钮
  PROXIO_CTA_BUTTON_URL: '/about',
  PROXIO_CTA_BUTTON_TEXT: '联系我',

  PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  PROXIO_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
