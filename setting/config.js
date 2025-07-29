const fs = require('fs')

global.owner = "6288228968298" // nomor owner
global.footer = "𝐊𝐞𝐫𝐳𝐳 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥"
global.namabot = "𝐊𝐢𝐚𝐭𝐫𝐨𝐀𝐝𝐯𝐞𝐧𝐭𝐮𝐫𝐞" // nama bot lu
global.status = true
global.namaowner = "𝐊𝐞𝐫𝐳𝐳 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥"
global.idsaluran = "120363402199410737@newsletter"
global.namasaluran = "𝐊𝐞𝐫𝐳𝐳 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥¹"
global.linksaluran = "https://whatsapp.com/channel/0029Vb5fu4zAInPmz03Iib2x" // link saluran lu
global.imgmenu = "https://files.catbox.moe/4afg9x.jpg" // JANGAN DI GANTI NNTI ERROR

//======[ Setting Event ]======//
global.lol = "";
global.msg = {
    owner: "🚫 Maaf, fitur ini hanya bisa digunakan oleh 𝐎𝐖𝐍𝐄𝐑 bot!",
    premium: "💎 Fitur ini khusus untuk member *Premium*! Silakan upgrade untuk mengakses.",
    admin: "🚫 Akses ditolak. Fitur ini hanya bisa digunakan oleh *Admin Grup*!",
    adminbot: "🤖 Saya bukan *Admin* di grup ini, jadi tidak bisa menjalankan perintah tersebut.",
    group: "👥 Fitur ini hanya bisa digunakan di dalam *Grup*!",
    priv: "📩 Fitur ini hanya bisa digunakan di *chat pribadi*!",
    bot: "⚠️ Fitur ini hanya untuk digunakan oleh *bot* itu sendiri."
}
global.autoTyping = true // ubah jadi false kalau mau matikan auto typing

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
