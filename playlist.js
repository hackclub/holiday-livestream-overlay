const playRandomSong = () => {
  const songs = [
    "among us & chill - lofi hip hop beats to relax to in space - 001 magic mondays - cruisin [lZm9ta1njdk].mp3",
    "among us & chill - lofi hip hop beats to relax to in space - 002 ptr. - goodbye [lZm9ta1njdk].mp3",
    "among us & chill - lofi hip hop beats to relax to in space - 003 yora - over the moon [lZm9ta1njdk].mp3",
    "among us & chill - lofi hip hop beats to relax to in space - 004 cookie tapes - 9am [lZm9ta1njdk].mp3",
    "among us & chill - lofi hip hop beats to relax to in space - 005 tuisku - viljo [lZm9ta1njdk].mp3",
    "among us & chill - lofi hip hop beats to relax to in space - 006 shardana - corals [lZm9ta1njdk].mp3",
    "among us & chill - lofi hip hop beats to relax to in space - 007 druid - metropolis [lZm9ta1njdk].mp3",
    "among us & chill - lofi hip hop beats to relax to in space - 008 storrify - a lost memory [lZm9ta1njdk].mp3",
    "among us & chill - lofi hip hop beats to relax to in space - 009 dream tax x jives - beside you [lZm9ta1njdk].mp3",
    "among us & chill - lofi hip hop beats to relax to in space - 010 chrononaut - lifetime [lZm9ta1njdk].mp3",
    "among us & chill - lofi hip hop beats to relax to in space - 011 david chief x joe nora - dusk [lZm9ta1njdk].mp3",
    "among us & chill - lofi hip hop beats to relax to in space - 012 kyodai - perspective [lZm9ta1njdk].mp3",
    "among us & chill - lofi hip hop beats to relax to in space - 013 silent enclave - lotus [lZm9ta1njdk].mp3",
    "among us & chill - lofi hip hop beats to relax to in space [lZm9ta1njdk].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 001 Elijah Lee - Dreamspace [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 002 Aqualina & Two Sleepy - Thoughts from the Past [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 003 towerz - bloom [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 004 twil - out back [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 005 Elijah Lee - The Warmth of Her Soul [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 006 Luv.ly & Ocha - Tea for Two [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 007 anxious. - A Thin Line [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 008 WYS - Church [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 009 Elijah Lee - Serenity [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 010 Ocha & Aqualina - One Day [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 011 Spencer Hunt & Mondo Loops - Warm [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 012 Two Sleepy - That Day [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 013 Elijah Lee - Shoreside Memories [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 014 Jordy Chandra & Softy - Evening Sky [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 015 H.1 - Yet [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 016 Kanisan - Wherever You Are [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 017 Elijah Lee - Liebe [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 018 Rajstar & Soho - Ebb and Flow [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 019 Frad - Warmth [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 020 HM Surf - Liquid Larry [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 021 Elijah Lee - Mello Departure [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 022 Ambulo - Stratosphere [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 023 Mell-o - Manana [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 024 No One's Perfect - Illusions [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 025 Oatmello - Oh My [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki - 026 Lucid Green - About Yesterday [Xry_g0Vp5MY].mp3",
    "korean cafe vibes _ a lofi hip hop mix ~ chill with taiki [Xry_g0Vp5MY].mp3",
    "peaceful winters [lofi _ chill mix] - 001 goson - we used to talk for hours [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 002 hazue - just a memory [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 003 revoir, ninn tendo - drift [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 004 rudi montaire - currents [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 005 chakaman - arrivals [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 006 lo-fi luke - hollow [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 007 amaez, moetown - vivid dreams [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 008 goson - thinking about you [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 009 wish on the beat - letting go [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 010 small hours - oceans calling [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 011 sleepy vibes - close your eyes [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 012 nvibes - door. [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 013 calm chapter - finally there [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 014 waseem - sail [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 015 roses - rouge [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 016 less gravity - the last star in the ceiling [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 017 flamingo zamperoni - fernweh [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] - 018 blusummr - bloom _ (edited) [B1mtx7UCsNU].mp3",
    "peaceful winters [lofi _ chill mix] [B1mtx7UCsNU].mp3"
  ]

  const randomSong = songs[Math.floor(Math.random() * songs.length)]

  const url = "https://lofi-store.maxwofford.repl.co/" + randomSong
  const audio = new Audio(url)
  audio.onended = () => {
    playRandomSong()
  }
  audio.play()
}

playRandomSong()