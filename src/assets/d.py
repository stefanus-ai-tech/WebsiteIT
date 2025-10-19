import subprocess

import os


input_file = "hero-wave.mp4"

output_file = "hero-wave-boomerang.mp4"


if not os.path.exists(input_file):

    print(f"Error: {input_file} not found!")

    exit()


print("Creating boomerang effect with FFmpeg...")


# Create reversed version first

subprocess.run([

    'ffmpeg', '-i', input_file,

    '-vf', 'reverse',

    '-af', 'areverse',

    'temp_reversed.mp4',

    '-y'

])


# Concatenate original and reversed

with open('concat_list.txt', 'w') as f:

    f.write(f"file '{input_file}'\n")

    f.write(f"file 'temp_reversed.mp4'\n")


subprocess.run([

    'ffmpeg', '-f', 'concat',

    '-safe', '0',

    '-i', 'concat_list.txt',

    '-c', 'copy',

    output_file,

    '-y'

])


# Cleanup

os.remove('temp_reversed.mp4')

os.remove('concat_list.txt')


print(f"Done! {output_file} created successfully.")
