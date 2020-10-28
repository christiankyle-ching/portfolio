import sys
import subprocess

try :
    # Run Parcel build before commit
    build_parcel = subprocess.run('npm run prod', shell=True, capture_output=True, text=True)
    
    if (build_parcel.returncode != 0):
        raise Exception(build_parcel.returncode)

    print('Build Parcel done...')

    # Add built parcel dist folder to before commit
    add_dist = subprocess.run('git add dist', shell=True, capture_output=True, text=True)

    if (add_dist.returncode != 0):
        raise Exception(add_dist.returncode)
    
    print('Added dist(build) folder before commit...')
    
    print('DONE')
    sys.exit(0)

except Exception as e:
    sys.exit(e)

