const {green, red} = require('chalk')
const {db, Product, User} = require('./server/db')
const {products} = require('./data-user')
const {users} = require('./data-product')

const seed = async () => {
  try {
    await db.sync({force: true})

    // seed products
    const [
      ac,
      aliquam,
      amet,
      basketball,
      blink,
      camelot,
      candy,
      cards,
      casino,
      chute,
      cinderella,
      civilization,
      classic,
      clue,
      consequa,
      convallis,
      cras,
      cursus,
      deck,
      dice,
      disney,
      disneyland,
      dominos,
      donec,
      dragon,
      duis,
      duiss,
      ebay,
      elementum,
      enchanted,
      enim,
      est,
      fairy,
      fantasy,
      felis,
      flinch,
      fruits,
      game,
      homage,
      hotels,
      iaculis,
      interdum,
      kingoil,
      kluctus,
      libero,
      lollipop,
      lowercase,
      magna,
      magnaa,
      magnis,
      mahjong,
      massa,
      mattis,
      mermaid,
      monopoly,
      montes,
      morbi,
      never,
      noragami,
      nulla,
      nullanc,
      ornare,
      othello,
      pebble,
      pede,
      pellentesque,
      pirate,
      pixar,
      pokemon,
      posuere,
      pretium,
      proin,
      pulvinar,
      puzzle,
      quam,
      sapien,
      seminterdum,
      semper,
      settlers,
      snes,
      sneslot,
      sollicitudin,
      solotaire,
      steeplechase,
      stratego,
      sudoku,
      tempus,
      texas,
      thatsso,
      tristique,
      twister,
      ultrices,
      unknown,
      uno,
      varius,
      vel,
      vestibulum,
      vikings,
      vitae,
      volutpat,
      which
    ] = await Product.bulkCreate(products)
    console.log(green('Seeded products'))

    // seed users
    const [
      lvogeler0,
      kgarbar1,
      mthorn2,
      bgaish3,
      cenglefield4,
      ytorres5,
      awoehler6,
      atatford7,
      ddwight8,
      lgascard9,
      ehasta,
      njennisonb,
      dprestidgec,
      wlestranged,
      mmervyne,
      rwhitlandf,
      ftatloweg,
      mackermannh,
      pgurradoi,
      cskiggsj,
      wgroomk,
      igroartyl,
      dsawoodm,
      glagrangen,
      darono,
      scorderop,
      ekeelinq,
      mdeclerqr,
      bkilliams,
      kadnett,
      sshillingfordu,
      dcleverleyv,
      sllewhellinw,
      ipinnegarx,
      aimliny,
      sreedsz,
      amitham10,
      sraper11,
      dspain12,
      mhumpage13,
      arudgerd14,
      tcoste15,
      abraferton16,
      bfairbrace17,
      bviger18,
      hitzak19,
      ccasale1a,
      aaxon1b,
      ssimion1c,
      azupo1d,
      tlondesborough1e,
      tancliffe1f,
      bglashby1g,
      aschutter1h,
      kgaskin1i,
      fliversley1j,
      agarrow1k,
      blideard1l,
      tmaultby1m,
      msudy1n,
      mgautrey1o,
      lbaake1p,
      ebison1q,
      bmeasham1r,
      khaberfield1s,
      chawkin1t,
      lwhitehair1u,
      pwankling1v,
      pgerrels1w,
      enaile1x,
      bgillingwater1y,
      rinkpin1z,
      jgerding20,
      bpurchon21,
      rrailton22,
      kdesouza23,
      cemor24,
      cparkisson25,
      nroderick26,
      wranvoise27,
      jbaldini28,
      iesom29,
      cmeneyer2a,
      mtoulson2b,
      cdemattei2c,
      rdeverson2d,
      tsalterne2e,
      wannies2f,
      bprattin2g,
      bdradey2h,
      mlocksley2i,
      tcarleton2j,
      wburbidge2k,
      mreedy2l,
      jhartgill2m,
      jcalcut2n,
      dbelshaw2o,
      mhaizelden2p,
      mstemson2q,
      egislebert2r
    ] = await User.bulkCreate(users)
    console.log(green('Seeded users'))

    // set associations
    await ac.setUser(lvogeler0)
    await aliquam.setUser(kgarbar1)
    await amet.setUser(mthorn2)
    await basketball.setUser(bgaish3)
    await blink.setUser(cenglefield4)
    await camelot.setUser(ytorres5)
    await candy.setUser(awoehler6)
    await cards.setUser(atatford7)
    await casino.setUser(ddwight8)
    await chute.setUser(lgascard9)
    await cinderella.setUser(ehasta)
    await civilization.setUser(njennisonb)
    await classic.setUser(dprestidgec)
    await clue.setUser(wlestranged)
    await consequa.setUser(mmervyne)
    await convallis.setUser(rwhitlandf)
    await cras.setUser(ftatloweg)
    await cursus.setUser(mackermannh)
    await deck.setUser(pgurradoi)
    await dice.setUser(cskiggsj)
    await disney.setUser(wgroomk)
    await disneyland.setUser(igroartyl)
    await dominos.setUser(dsawoodm)
    await donec.setUser(glagrangen)
    await dragon.setUser(darono)
    await duis.setUser(scorderop)
    await duiss.setUser(ekeelinq)
    await ebay.setUser(mdeclerqr)
    await elementum.setUser(bkilliams)
    await enchanted.setUser(kadnett)
    await enim.setUser(sshillingfordu)
    await est.setUser(dcleverleyv)
    await fairy.setUser(sllewhellinw)
    await fantasy.setUser(ipinnegarx)
    await felis.setUser(aimliny)
    await flinch.setUser(sreedsz)
    await fruits.setUser(amitham10)
    await game.setUser(sraper11)
    await homage.setUser(dspain12)
    await hotels.setUser(mhumpage13)
    await iaculis.setUser(arudgerd14)
    await interdum.setUser(tcoste15)
    await kingoil.setUser(abraferton16)
    await kluctus.setUser(bfairbrace17)
    await libero.setUser(bviger18)
    await lollipop.setUser(hitzak19)
    await lowercase.setUser(ccasale1a)
    await magna.setUser(aaxon1b)
    await magnaa.setUser(ssimion1c)
    await magnis.setUser(azupo1d)
    await mahjong.setUser(tlondesborough1e)
    await massa.setUser(tancliffe1f)
    await mattis.setUser(bglashby1g)
    await mermaid.setUser(aschutter1h)
    await monopoly.setUser(kgaskin1i)
    await montes.setUser(fliversley1j)
    await morbi.setUser(agarrow1k)
    await never.setUser(blideard1l)
    await noragami.setUser(tmaultby1m)
    await nulla.setUser(msudy1n)
    await nullanc.setUser(mgautrey1o)
    await ornare.setUser(lbaake1p)
    await othello.setUser(ebison1q)
    await pebble.setUser(bmeasham1r)
    await pede.setUser(khaberfield1s)
    await pellentesque.setUser(chawkin1t)
    await pirate.setUser(lwhitehair1u)
    await pixar.setUser(pwankling1v)
    await pokemon.setUser(pgerrels1w)
    await posuere.setUser(enaile1x)
    await pretium.setUser(bgillingwater1y)
    await proin.setUser(rinkpin1z)
    await pulvinar.setUser(jgerding20)
    await puzzle.setUser(bpurchon21)
    await quam.setUser(rrailton22)
    await sapien.setUser(kdesouza23)
    await seminterdum.setUser(cemor24)
    await semper.setUser(cparkisson25)
    await settlers.setUser(nroderick26)
    await snes.setUser(wranvoise27)
    await sneslot.setUser(jbaldini28)
    await sollicitudin.setUser(iesom29)
    await solotaire.setUser(cmeneyer2a)
    await steeplechase.setUser(mtoulson2b)
    await stratego.setUser(cdemattei2c)
    await sudoku.setUser(rdeverson2d)
    await tempus.setUser(tsalterne2e)
    await texas.setUser(wannies2f)
    await thatsso.setUser(bprattin2g)
    await tristique.setUser(bdradey2h)
    await twister.setUser(mlocksley2i)
    await ultrices.setUser(tcarleton2j)
    await unknown.setUser(wburbidge2k)
    await uno.setUser(mreedy2l)
    await varius.setUser(jhartgill2m)
    await vel.setUser(jcalcut2n)
    await vestibulum.setUser(dbelshaw2o)
    await vikings.setUser(mhaizelden2p)
    await vitae.setUser(mstemson2q)
    await volutpat.setUser(egislebert2r)
    await which.setUser(egislebert2r)
    console.log(green('Associations set'))
  } catch (error) {
    console.log(red(err))
  }
}

module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'))
      db.close()
    })
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err)
      db.close()
    })
}
