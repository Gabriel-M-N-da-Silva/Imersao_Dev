var logoFilmes = [
  "https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg",
  "https://br.web.img3.acsta.net/pictures/19/12/18/16/25/0588210.jpg",
  "https://br.web.img2.acsta.net/pictures/18/03/16/15/08/2019826.jpg"
];

var linkFilmes = [
  "https://www.google.com/search?q=harry+potter&source=lmns&bih=656&biw=1331&hl=pt-BR&sa=X&ved=2ahUKEwiq2_z7xoPzAV2pZUCHS2BCO4Q_AUoAHoECAEQAA",
  "https://www.google.com/search?q=star+wars&bih=656&biw=1331&hl=pt-BR&sxsrf=AOaemvJqVRcpJ9NZV-oSkDS0sXvrireIqg%3A1631797386642&ei=ikBDYb7QJvTT1sQPhqOBkA4&oq=star+wars&gs_lcp=Cgdnd3Mtd2l6EAMyCgguELEDEEMQkwIyBAguEEMyBAgAEEMyBAguEEMyBwgAELEDEEMyBAguEEMyBAguEEMyBwguELEDEEMyBwguELEDEEMyCAgAEIAEELEDOgQIIxAnOgsILhCABBCxAxCDAToOCC4QgAQQsQMQxwEQ0QM6CwguEIAEEMcBEKMCOggILhCABBCxAzoOCC4QgAQQsQMQxwEQowI6BggjECcQEzoFCAAQgAQ6CwgAEIAEELEDEIMBSgUIPBIBMkoECEEYAFCPmyxY0KosYNurLGgCcAB4AIABqQKIAY4MkgEFMC42LjKYAQCgAQHAAQE&sclient=gws-wiz&ved=0ahUKEwi-vc38xoPzAhX0qZUCHYZRAOIQ4dUDCA4&uact=5",
  "https://www.google.com/search?q=vingadores+guerra+infinita&bih=656&biw=1331&hl=pt-BR&sxsrf=AOaemvICzt2hbjO-mqK5t2dMuUYhNajdVg%3A1631798114586&ei=YkNDYZepI7Pa1sQP4KmMiA4&gs_ssp=eJzj4tbP1TcwNDJLssjOM2D0kirLzEtPTMkvSi1WSC9NLSpKVMjMS8vMyyxJBAALdA38&oq=vingadores+guerra&gs_lcp=Cgdnd3Mtd2l6EAEYADIKCC4QsQMQQxCTAjIFCC4QgAQyBAgAEEMyBQgAEIAEMgUILhCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIIxAnOgUIABCxAzoICAAQgAQQsQM6DgguEIAEELEDEMcBEKMCOgcILhBDEJMCOgQILhBDOgsILhCABBDHARCjAjoKCC4QxwEQowIQQzoHCC4QsQMQQzoKCC4QxwEQ0QMQQzoICC4QgAQQsQM6CgguELEDEIMBEENKBAhBGABQgaoBWMrOAWC41AFoAHAAeAGAAboCiAG5F5IBCDAuMTMuMy4xmAEAoAEBwAEB&sclient=gws-wiz"
];

// for (var i = 0; i < logoFilmes.length; i++) {
//   document.write("<img src=" + logoFilmes[i] + ">");
// }

for (var i = 0; i < logoFilmes.length; i++) {
  document.write("<a href ="+ linkFilmes[i] + " target=" + "_blank>" + "<img src =" + logoFilmes[i] + "></a>" );
}
