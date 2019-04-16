trey = User.create(name: 'Trey')
TK = User.create(name: 'TK')
adam = User.create(name: 'Adam')

layout1 = Layout.create(name: 'Blog Style', user: trey, html: 'html')
layout2 = Layout.create(name: 'Video Sharing', user: TK, html: 'html')
layout3 = Layout.create(name: 'Social Media', user: adam, html: 'html')
