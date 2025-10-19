from moviepy.editor import VideoFileClip, concatenate_videoclips

from moviepy.video.fx.all import time_mirror


# Load video asli

video = VideoFileClip("hero-wave.mp4")


# Buat versi reverse

video_reverse = video.fx(time_mirror)


# Gabungkan

final_video = concatenate_videoclips([video, video_reverse])


# Export

final_video.write_videofile(

    "hero-wave-boomerang.mp4",

    codec='libx264',

    audio_codec='aac',

    fps=video.fps

)


# Clean up

video.close()

video_reverse.close()

final_video.close()
