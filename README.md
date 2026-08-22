# The Odyssey Listening Edition

This front end is ready for GitHub Pages or any static host. The player expects
one public MP3 per book, named `book-01.mp3` through `book-24.mp3`.

To connect the final narration, copy only the 24 `book-01.mp3` through
`book-24.mp3` files into `public/audio/` and set `AUDIO_BASE_URL` in
`app/audio-manifest.ts` to `/audio`. Do not copy the four continuous volumes:
they duplicate the book files and push the GitHub Pages release over 1 GB.

Paste the public Google Drive viewer links for those volumes into `volumeLinks`
in the same manifest. The mastered project audio in
`../audio-openai-fable/books/` remains the archive/source set.
