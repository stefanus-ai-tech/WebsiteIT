from moviepy.editor import VideoFileClip, concatenate_videoclips


# Load video asli

video = VideoFileClip("hero-wave.mp4")


# Buat versi reverse dengan mengambil frame terbalik

video_reverse = video.time_mirror()


# Gabungkan

final_video = concatenate_videoclips([video_reverse, video])


# Export

final_video.write_videofile(

    "hero-wave-boomerang.mp4",

    codec='libx264',

    audio_codec='aac',

    fps=video.fps

)


video.close()

video_reverse.close()

final_video.close()
