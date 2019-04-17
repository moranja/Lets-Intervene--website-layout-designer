trey = User.create(name: 'Trey')
TK = User.create(name: 'TK')
adam = User.create(name: 'Adam')

layout1 = Layout.create(name: 'Blog Style', user: trey, img: "https://www.propertyme.com.au/media/k2/items/cache/817a0b87c8b4a5b09390d4c2ae24ca96_L.jpg", html: 'html')
layout2 = Layout.create(name: 'Video Sharing', user: TK, img: "https://www.propertyme.com.au/media/k2/items/cache/817a0b87c8b4a5b09390d4c2ae24ca96_L.jpg", html: 'html')
layout3 = Layout.create(name: 'Social Media', user: adam, img: "https://www.propertyme.com.au/media/k2/items/cache/817a0b87c8b4a5b09390d4c2ae24ca96_L.jpg", html: 'html')
