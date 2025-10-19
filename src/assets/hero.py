from moviepy.editor import VideoFileClip, concatenate_videoclips


# Load video asli

video = VideoFileClip("hero-wave.mp4")


# Buat versi reverse (diputar mundur)

video_reverse = video.fx(lambda clip: clip.time_mirror())


# Gabungkan: reverse dulu, lalu video normal

# Hasilnya: mundur -> maju (efek bolak-balik)

final_video = concatenate_videoclips([video_reverse, video])


# Export video hasil

final_video.write_videofile(

    "hero-wave-boomerang.mp4",

    codec='libx264',

    audio_codec='aac',

    fps=video.fps

)


# Tutup clips untuk free memory

video.close()

video_reverse.close()

final_video.close()


print("Video bolak-balik berhasil dibuat: hero-wave-boomerang.mp4")
